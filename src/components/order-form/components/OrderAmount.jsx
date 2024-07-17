import PropTypes from "prop-types";

/**
 * OrderAmount component
 * Renders the order amount input field for the pizza order form.
 * @component of FormSection
 */
export default function OrderAmount(props) {
  const { amount, setOrder, handleChange } = props;

  return (
    <div className="flex items-start justify-center space-x-2">
      <button
        id="order-amount-decrease"
        type="button"
        className="btn btn-warning btn-sm w-6"
        onClick={() =>
          amount > 1 && setOrder((prev) => ({ ...prev, amount: amount - 1 }))
        }
      >
        -
      </button>
      <input
        id="order-amount-input"
        type="number"
        value={amount}
        onChange={handleChange}
        className="input input-sm input-bordered !ml-0 w-12 text-center"
      />
      <button
        id="order-amount-increase"
        type="button"
        className="btn btn-warning btn-sm !ml-0 w-6"
        onClick={() => setOrder((prev) => ({ ...prev, amount: amount + 1 }))}
      >
        +
      </button>
    </div>
  );
}

OrderAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  setOrder: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
