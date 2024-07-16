import PropTypes from "prop-types";
import { ingredientData } from "../data/formData.json";

export default function Ingredients(props) {
  const { ingredients, handleChange } = props;

  return (
    <>
      <h3 className="text-lg font-bold">Ek Malzemeler</h3>
      <p className="py-2 text-sm">
        En fazla <span className="font-bold underline">10</span> adet malzeme
        seçebilirsiniz. <span className="font-bold underline">5₺</span>
      </p>
      <div className="grid grid-flow-col grid-rows-5 gap-1">
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
                value={item.name}
                checked={ingredients.includes(item.name) || false}
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
