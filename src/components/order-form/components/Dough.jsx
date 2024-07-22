import { doughData } from "../data/formData.json";

/**
 * Dough component
 * Renders the dough selection dropdown for the pizza order form.
 * @component of OrderForm
 */
export default function Dough({ register }) {
  return (
    <select
      className="select select-bordered select-sm w-full max-w-xs py-0"
      {...register("dough", {
        required: "Lütfen hamur tipini seçiniz!",
        validate: (value) =>
          value !== "Hamur Kalınlığı" || "Lütfen hamur tipini seçiniz!",
      })}
    >
      {doughData.map((item) => (
        <option key={item.id} value={item.value} disabled={item.disabled}>
          {item.value}
        </option>
      ))}
    </select>
  );
}
