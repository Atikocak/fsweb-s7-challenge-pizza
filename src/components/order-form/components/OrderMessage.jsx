import PropTypes from "prop-types";

export default function OrderMessage(props) {
  const { message, handleChange } = props;

  return (
    <>
      <label htmlFor="order-message" className="label text-lg font-bold">
        Sipariş Notu
      </label>
      <textarea
        id="order-message"
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
