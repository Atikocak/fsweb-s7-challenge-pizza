import PropTypes from "prop-types";
import { doughData } from "../data/formData.json";

export default function Dough(props) {
  const { dough, handleChange, error } = props;

  return (
    <div id="form-dough">
      <h3 className="pb-1 text-lg font-bold">
        Hamur Seç <span className="text-red">*</span>
      </h3>
      <select
        className="select select-bordered select-sm w-full max-w-xs py-0"
        value={dough}
        onChange={handleChange}
      >
        {doughData.map((item) => (
          <option key={item.id} value={item.value} disabled={item.disabled}>
            {item.content}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red"> {error} </p>}
    </div>
  );
}

Dough.propTypes = {
  dough: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
