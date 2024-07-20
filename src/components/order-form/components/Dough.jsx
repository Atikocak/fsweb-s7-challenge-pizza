import PropTypes from "prop-types";
import { doughData } from "../data/formData.json";

/**
 * Dough component
 * Renders the dough selection dropdown for the pizza order form.
 * @component of OrderForm
 */
export default function Dough(props) {
  const { dough, handleChange } = props;

  return (
    <select
      className="select select-bordered select-sm w-full max-w-xs py-0"
      value={dough}
      onChange={handleChange}
    >
      {doughData.map((item) => (
        <option key={item.id} value={item.value} disabled={item.disabled}>
          {item.value}
        </option>
      ))}
    </select>
  );
}

Dough.propTypes = {
  dough: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
