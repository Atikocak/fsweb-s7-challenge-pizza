import PropTypes from "prop-types";
import { ingredientData } from "../data/formData.json";

/**
 * Ingredients component
 * Renders the ingredient selection checkboxes for the pizza order form.
 * @component of FormSection
 */
export default function Ingredients(props) {
  const { ingredients, handleChange } = props;

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
                name={item.name}
                className="checkbox-warning checkbox checkbox-sm"
                value={item.value}
                checked={ingredients.includes(item.value) || false}
                onChange={handleChange}
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

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};
