import PropTypes from "prop-types";

/**
 * CustomerName component
 * Renders the customer name input field for the pizza order form.
 * @component of FormSection
 */
export default function CustomerName(props) {
  const { customerName, handleChange } = props;

  return (
    <>
      <input
        type="text"
        id="customer-name-field"
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
