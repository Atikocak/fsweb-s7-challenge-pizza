/**
 * OrderMessage component
 * Renders the order message textarea for the pizza order form.
 * @component of FormSection
 */
export default function OrderMessage({ register }) {
  return (
    <>
      <textarea
        id="order-message-field"
        rows={1}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        className="textarea textarea-bordered textarea-sm w-full"
        {...register("orderMessage", {
          maxLength: {
            value: 200,
            message: "Notunuz en fazla 200 karakter olabilir!",
          },
        })}
      />
    </>
  );
}
