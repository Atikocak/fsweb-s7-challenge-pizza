/**
 * CustomerName component
 * Renders the customer name input field for the pizza order form.
 * @component of FormSection
 */
export default function CustomerName({ register }) {
  return (
    <>
      <input
        type="text"
        id="customer-name-field"
        placeholder="Teslim edilecek kişinin adı?"
        className="input input-sm input-bordered w-full"
        {...register("customerName", {
          required: "Lütfen teslimat için isim giriniz!",
          minLength: {
            value: 3,
            message: "İsim en az 3 karakter olmalıdır!",
          },
        })}
      />
    </>
  );
}
