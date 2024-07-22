import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerName from "./components/CustomerName";
import Dough from "./components/Dough";
import Ingredients from "./components/Ingredients";
import OrderAmount from "./components/OrderAmount";
import OrderMessage from "./components/OrderMessage";
import SendOrder from "./components/SendOrder";
import Size from "./components/Size";
import { initialData } from "./data/formData.json";
import FormSection from "./FormSection";

/**
 * OrderForm component
 * Handles the pizza order form, including size, dough, ingredients, and customer information.
 * @component of OrderPage
 */
export default function OrderForm({ product }) {
  const [submitError, setSubmitError] = useState(null);
  const formRef = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialData,
    mode: "onSubmit",
  });

  const ingredients = watch("ingredients")?.length || 0;
  const amount = watch("amount") || 1;

  const calculateTotalPrice = (order) => {
    return order.amount * (product.price + order.ingredients.length * 5);
  };

  const onSubmit = async (order) => {
    const result = await trigger();
    if (!isValid) {
      const firstError = Object.keys(errors)[0];
      formRef.current[firstError].focus();
      return;
    }

    const submittedOrder = {
      ...order,
      price: calculateTotalPrice(order),
      product: product.title,
    };

    axios
      .post("https://reqres.in/api/pizza", submittedOrder)
      .then((response) => {
        console.log("Sipariş özeti: ", response.data);
        toast.success("Teşekkürler, siparişiniz alındı!", {
          position: "top-center",
          autoClose: 5000,
        });
        navigate("/success", { state: { order: response.data } });
      })
      .catch((error) => {
        console.error("Error: ", error);
        toast.error("Ne yazık ki siparişinizi alamadık!", {
          position: "top-center",
          autoClose: 5000,
        });
        setSubmitError(
          "Sipariş gönderilirken bir hata oluştu! ",
          error.message,
        );
      });
  };

  // JSX return
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-lg flex-col gap-4 p-4"
    >
      <div id="form-dimension" className="mt-4 flex justify-between">
        <FormSection
          name="size"
          title="Boyut Seç"
          className="font-barlow"
          error={errors.size?.message}
          required
        >
          <Size register={register} />
        </FormSection>
        <FormSection
          name="dough"
          title="Hamur Seç"
          className="font-barlow"
          error={errors.dough?.message}
          required
        >
          <Dough register={register} />
        </FormSection>
      </div>
      <FormSection
        name="ingredients"
        title="Malzeme Seç"
        className="font-barlow"
        error={errors.ingredients?.message}
        required
      >
        <Ingredients register={register} />
      </FormSection>
      <FormSection
        name="customer-name"
        title="İsim"
        className="font-barlow"
        error={errors.customerName?.message}
        label
        required
      >
        <CustomerName register={register} />
      </FormSection>
      <FormSection
        name="order-message"
        title="Sipariş Notu"
        className="font-barlow"
        error={errors.orderMessage?.message}
        label
      >
        <OrderMessage register={register} />
      </FormSection>
      <hr className="mt-4" />
      <div className="grid w-full grid-flow-col grid-rows-2 justify-between sm:flex sm:max-w-full sm:flex-row">
        <FormSection
          name="order-amount"
          className="col-start-1 row-start-2 mt-2"
          error={errors.amount?.message}
        >
          <OrderAmount register={register} setValue={setValue} watch={watch} />
        </FormSection>
        <FormSection
          name="submit"
          className="col-start-1 row-start-1 font-barlow"
        >
          <SendOrder
            ingredients={ingredients}
            amount={amount}
            totalPrice={calculateTotalPrice(watch())}
            isValid={isValid}
          />
        </FormSection>
      </div>
      {submitError && <p className="mt-4 text-red">{submitError}</p>}
    </form>
  );
}
