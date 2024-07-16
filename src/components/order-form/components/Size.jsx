import PropTypes from "prop-types";
import { sizeData } from "../data/formData.json";

export default function Size(props) {
  const { size, handleChange } = props;

  return (
    <div id="form-size">
      <h3 className="text-lg font-bold">
        Boyut Seç <span className="text-red">*</span>
      </h3>
      {sizeData.map((item) => {
        return (
          <div key={item.id} className="flex flex-row items-center">
            <input
              type="radio"
              name="size"
              id={item.name}
              className="radio radio-xs"
              value={item.name}
              checked={size === item.name}
              onChange={handleChange}
            />
            <label htmlFor={item.name} className="label cursor-pointer">
              <span className="label-text">{item.value}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

Size.propTypes = {
  size: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
