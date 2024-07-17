import PropTypes from "prop-types";

/**
 * OrderMessage component
 * Renders the order message textarea for the pizza order form.
 * @component of FormSection
 */
export default function OrderMessage(props) {
  const { message, handleChange } = props;

  return (
    <>
      <textarea
        id="order-message-field"
        rows={1}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        className="textarea textarea-bordered textarea-sm w-full"
        value={message}
        onChange={handleChange}
      />
    </>
  );
}

OrderMessage.propTypes = {
  message: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
