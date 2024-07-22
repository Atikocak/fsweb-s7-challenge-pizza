/**
 * OrderAmount component
 * Renders the order amount input field for the pizza order form.
 * @component of FormSection
 */
export default function OrderAmount({ register, setValue, watch }) {
  const amount = watch("amount") || 1;

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value < 1 || !value) {
      setValue("amount", 1);
    } else {
      setValue("amount", parseInt(value), { shouldValidate: true });
    }
  };

  return (
    <div className="flex items-start justify-center space-x-2">
      <button
        id="order-amount-decrease"
        type="button"
        className="btn btn-warning btn-sm w-6"
        onClick={() =>
          amount > 1 && setValue("amount", amount - 1, { shouldValidate: true })
        }
      >
        -
      </button>
      <input
        id="order-amount-input"
        type="number"
        className="input input-sm input-bordered !ml-0 w-12 text-center"
        value={amount}
        onChange={handleInputChange}
        onBlur={() => {
          if (amount < 1 || amount === "") {
            setValue("amount", 1);
          }
        }}
        {...register("amount", {
          required: "Lütfen sipariş miktarı giriniz!",
          validate: (value) => {
            if (value < 1 || value === "")
              return "En az 1 adet sipariş verebilirsiniz!";
            if (value > 10) return "En fazla 10 adet sipariş verebilirsiniz!";
            return true;
          },
        })}
      />
      <button
        id="order-amount-increase"
        type="button"
        className="btn btn-warning btn-sm !ml-0 w-6"
        onClick={() => setValue("amount", amount + 1, { shouldValidate: true })}
      >
        +
      </button>
    </div>
  );
}
