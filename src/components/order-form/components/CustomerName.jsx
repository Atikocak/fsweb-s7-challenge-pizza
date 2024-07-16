import PropTypes from "prop-types";

export default function CustomerName(props) {
  const { customerName, handleChange } = props;

  return (
    <>
      <label
        htmlFor="name-field"
        className="label justify-start text-lg font-bold"
      >
        İsim <span className="ml-1 text-red">*</span>
      </label>
      <input
        type="text"
        id="name-field"
        placeholder="Teslim edilecek kişinin adı?"
        className="input input-sm input-bordered w-full"
        value={customerName}
        onChange={handleChange}
      />
    </>
  );
}

CustomerName.propTypes = {
  customerName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};