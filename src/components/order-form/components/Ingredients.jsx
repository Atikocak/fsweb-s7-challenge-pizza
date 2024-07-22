import { ingredientData } from "../data/formData.json";

/**
 * Ingredients component
 * Renders the ingredient selection checkboxes for the pizza order form.
 * @component of FormSection
 */
export default function Ingredients({ register }) {
  return (
    <>
      <p className="pb-2 text-sm">
        En fazla <span className="font-bold underline">10</span> adet malzeme
        seçebilirsiniz. <span className="font-bold underline">5₺</span>
      </p>
      <div className="grid grid-flow-row grid-cols-2 gap-1 sm:grid-flow-col sm:grid-rows-5">
        {ingredientData.map((item) => {
          return (
            <div
              key={item.id}
              id={`check-${item.name}`}
              className="flex items-center"
            >
              <input
                type="checkbox"
                id={item.name}
                className="checkbox-warning checkbox checkbox-sm"
                value={item.value}
                {...register("ingredients", {
                  required: true,
                  validate: (value) => {
                    if (value.length < 4)
                      return "En az 4 malzeme seçmelisiniz!";
                    if (value.length > 10)
                      return "En fazla 10 malzeme seçebilirsiniz!";
                    return true;
                  },
                })}
              />
              <label htmlFor={item.name} className="label cursor-pointer">
                <span className="label-text">{item.value}</span>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
