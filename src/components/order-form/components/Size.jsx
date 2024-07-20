import PropTypes from "prop-types";
import { sizeData } from "../data/formData.json";

/**
 * Size component
 * Renders the size selection radio buttons for the pizza order form.
 * @component of FormSection
 */
export default function Size(props) {
  const { size, handleChange } = props;

  return (
    <>
      {sizeData.map((item) => {
        return (
          <div key={item.id} className="flex flex-row items-center">
            <input
              type="radio"
              name="size"
              id={item.name}
              className="radio radio-xs"
              value={item.value}
              checked={size === item.value}
              onChange={handleChange}
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

Size.propTypes = {
  size: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
