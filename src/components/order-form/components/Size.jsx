import { sizeData } from "../data/formData.json";

/**
 * Size component
 * Renders the size selection radio buttons for the pizza order form.
 * @component of FormSection
 */
export default function Size({ register }) {
  return (
    <>
      {sizeData.map((item) => {
        return (
          <div key={item.id} className="flex flex-row items-center">
            <input
              type="radio"
              id={item.name}
              className="radio radio-xs"
              value={item.value}
              {...register("size", {
                required: "Lütfen pizza boyutunu seçiniz!",
              })}
            />
            <label htmlFor={item.name} className="label cursor-pointer">
              <span className="label-text">{item.value}</span>
            </label>
          </div>
        );
      })}
    </>
  );
}
