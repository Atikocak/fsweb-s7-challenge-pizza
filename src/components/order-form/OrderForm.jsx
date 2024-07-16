import axios from "node_modules/axios/index";
import { useEffect, useState } from "react";
import CustomerName from "./components/CustomerName";
import Dough from "./components/Dough";
import Ingredients from "./components/Ingredients";
import OrderAmount from "./components/OrderAmount";
import OrderMessage from "./components/OrderMessage";
import SendOrder from "./components/SendOrder";
import Size from "./components/Size";

const initialData = {
  size: "",
  dough: "",
  ingredients: [],
  customerName: "",
  message: "",
  amount: 1,
};

const initialErrors = {
  size: "",
  dough: "",
  ingredients: "",
  customerName: "",
};

const productPrice = 85.5;

export default function OrderForm() {
  const [order, setOrder] = useState(initialData);
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(productPrice);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (order.amount >= 1) {
      setIngredientPrice(order.ingredients.length * 5);
      setTotalPrice(
        order.amount * (productPrice + order.ingredients.length * 5),
      );
    }
    validateForm();
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const submittedOrder = {
        ...order,
        price: totalPrice,
      };

      axios
        .post("https://reqres.in/api/pizza", submittedOrder)
        .then((response) => {
          console.log("Sipariş özeti: ", response.data);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = { ...initialErrors };

    if (!order.size) {
      errors.size = "Lütfen pizza boyutunu seçiniz!";
      isValid = false;
    }
    if (!order.dough) {
      errors.dough = "Lütfen hamur tipini seçiniz!";
      isValid = false;
    }
    if (order.ingredients.length < 4) {
      errors.ingredients = "En az 4 malzeme seçmelisiniz!";
      isValid = false;
    } else if (order.ingredients.length > 10) {
      errors.ingredients = "En fazla 10 malzeme seçebilirsiniz!";
      isValid = false;
    }
    if (!order.customerName) {
      errors.customerName = "Lütfen teslimat için isim giriniz!";
      isValid = false;
    } else if (order.customerName.length < 3) {
      errors.customerName = "İsim en az 3 karakter olmalıdır!";
      isValid = false;
    }

    setErrors(errors);
    setIsValid(isValid);
  };

  const increaseAmount = () => {
    setOrder((prev) => ({ ...prev, amount: prev.amount + 1 }));
  };

  const decreaseAmount = () => {
    if (order.amount > 1) {
      setOrder((prev) => ({ ...prev, amount: prev.amount - 1 }));
    }
  };

  const handleSizeChange = (e) => {
    setOrder((prev) => ({ ...prev, size: e.target.value }));
  };

  const handleDoughChange = (e) => {
    setOrder((prev) => ({ ...prev, dough: e.target.value }));
  };

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setOrder((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, value],
      }));
    } else {
      setOrder((prev) => ({
        ...prev,
        ingredients: prev.ingredients.filter((item) => item !== value),
      }));
    }
  };

  const handleNameChange = (e) => {
    setOrder((prev) => ({ ...prev, customerName: e.target.value }));
  };

  const handleMessageChange = (e) => {
    setOrder((prev) => ({ ...prev, message: e.target.value }));
  };

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setOrder((prev) => ({ ...prev, amount: value }));
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <div id="form-dimension" className="mt-4 flex justify-between">
        <Size
          size={order.size}
          handleChange={handleSizeChange}
          error={errors.size}
        />
        <Dough
          dough={order.dough}
          handleChange={handleDoughChange}
          error={errors.dough}
        />
      </div>
      <div id="form-ingredients">
        <Ingredients
          ingredients={order.ingredients}
          handleChange={handleIngredientChange}
          error={errors.ingredients}
        />
      </div>
      <div id="form-customer-name">
        <CustomerName
          customerName={order.customerName}
          handleChange={handleNameChange}
          error={errors.customerName}
        />
      </div>
      <div id="form-order-message">
        <OrderMessage
          message={order.message}
          handleChange={handleMessageChange}
        />
      </div>
      <hr className="mt-4" />
      <div id="form-order-complete" className="flex justify-between">
        <OrderAmount
          amount={order.amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          handleChange={handleAmountChange}
        />
        <div id="form-submit">
          <SendOrder
            ingredientPrice={ingredientPrice}
            totalPrice={totalPrice}
            handleSubmit={handleSubmit}
            disabled={!isValid}
          />
        </div>
      </div>
    </form>
  );
}
