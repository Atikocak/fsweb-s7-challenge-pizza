import PropTypes from "prop-types";

export default function OrderAmount(props) {
  const { amount, decreaseAmount, increaseAmount, handleChange } = props;

  return (
    <div
      id="form-order-amount"
      className="mt-4 flex items-start justify-center space-x-2"
    >
      <button
        id="decrease-order-amount"
        type="button"
        className="btn btn-warning btn-sm w-6"
        onClick={decreaseAmount}
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
        id="increase-order-amount"
        type="button"
        className="btn btn-warning btn-sm !ml-0 w-6"
        onClick={increaseAmount}
      >
        +
      </button>
    </div>
  );
}

OrderAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  increaseAmount: PropTypes.func.isRequired,
  decreaseAmount: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
