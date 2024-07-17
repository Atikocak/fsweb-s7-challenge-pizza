import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createIngredientChangeHandler,
  createInputHandler,
  createSelectionHandler,
} from "utils/helperMethods";
import CustomerName from "./components/CustomerName";
import Dough from "./components/Dough";
import Ingredients from "./components/Ingredients";
import OrderAmount from "./components/OrderAmount";
import OrderMessage from "./components/OrderMessage";
import SendOrder from "./components/SendOrder";
import Size from "./components/Size";
import { initialData, initialErrors } from "./data/formData.json";
import FormSection from "./FormSection";

const productPrice = 85.5;

/**
 * OrderForm component
 * Handles the pizza order form, including size, dough, ingredients, and customer information.
 * @component of OrderPage
 */
export default function OrderForm() {
  const [order, setOrder] = useState(initialData);
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(productPrice);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate the ingredient price and total price
    if (order.amount >= 1) {
      setIngredientPrice(order.ingredients.length * 5);
      setTotalPrice(
        order.amount * (productPrice + order.ingredients.length * 5),
      );
    }
    // Form Validation
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
    // Update the state
    setErrors(errors);
    setIsValid(isValid);
  }, [order]);

  /**
   * Handles form submission
   * Sends the order data to the server if valid
   * @param {Event} e - The form submission event
   */
  // Form Submit
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
          navigate("/success", { state: { order: response.data } });
        })
        .catch((error) => {
          console.error("Error: ", error);
          setErrors((prev) => ({ ...prev, submit: error.message }));
        });
    }
  };

  // Event Handlers
  const handleSelectionChange = createSelectionHandler(setOrder);
  const handleIngredientChange = createIngredientChangeHandler(setOrder);
  const handleInputChange = createInputHandler(setOrder);

  // JSX return
  return (
    <form className="flex flex-col gap-4">
      <div id="form-dimension" className="mt-4 flex justify-between">
        <FormSection name="size" title="Boyut Seç" error={errors.size} required>
          <Size
            size={order.size}
            handleChange={handleSelectionChange("size")}
          />
        </FormSection>
        <FormSection
          name="dough"
          title="Hamur Seç"
          error={errors.dough}
          required
        >
          <Dough
            dough={order.dough}
            handleChange={handleSelectionChange("dough")}
          />
        </FormSection>
      </div>
      <FormSection
        name="ingredients"
        title="Malzeme Seç"
        error={errors.ingredients}
        required
      >
        <Ingredients
          ingredients={order.ingredients}
          handleChange={handleIngredientChange}
        />
      </FormSection>
      <FormSection
        name="customer-name"
        title="İsim"
        error={errors.customerName}
        label
        required
      >
        <CustomerName
          customerName={order.customerName}
          handleChange={handleInputChange("customerName")}
        />
      </FormSection>
      <FormSection name="order-message" title="Sipariş Notu" label>
        <OrderMessage
          message={order.message}
          handleChange={handleInputChange("message")}
        />
      </FormSection>
      <hr className="mt-4" />
      <div className="grid w-full grid-flow-col grid-rows-2 justify-between sm:flex sm:max-w-full sm:flex-row">
        <FormSection
          name="order-amount"
          className="col-start-1 row-start-2 mt-2"
        >
          <OrderAmount
            amount={order.amount}
            setOrder={setOrder}
            handleChange={handleInputChange("amount", (value) => value > 0)}
          />
        </FormSection>
        <FormSection name="submit" className="col-start-1 row-start-1">
          <SendOrder
            ingredientPrice={ingredientPrice}
            totalPrice={totalPrice}
            handleSubmit={handleSubmit}
            disabled={!isValid}
          />
        </FormSection>
      </div>
      {errors.submit && <p className="text-red">{errors.submit}</p>}
    </form>
  );
}
