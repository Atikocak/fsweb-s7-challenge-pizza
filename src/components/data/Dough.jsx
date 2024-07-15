import PropTypes from "prop-types";

export default function Dough(props) {
  const { dough, handleChange } = props;

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
        <option value={""} disabled>
          Hamur Kalınlığı
        </option>
        <option value={"thin"}>İnce</option>
        <option value={"thick"}>Kalın</option>
      </select>
    </div>
  );
}

Dough.propTypes = {
  dough: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
