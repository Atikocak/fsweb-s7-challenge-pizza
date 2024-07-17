import PropTypes from "prop-types";

/**
 * SendOrder component
 * Renders the order total and submit button for the pizza order form.
 * @component of OrderForm
 */
export default function SendOrder(props) {
  const { ingredientPrice, totalPrice, handleSubmit, disabled } = props;

  return (
    <div className="card min-w-[352px] bg-base-100 shadow-xl sm:w-72">
      <div className="card-body">
        <h3 className="card-title font-bold">Sipariş Toplamı</h3>
        <div className="grid grid-flow-col grid-rows-2">
          <p className="col-start-1 row-start-1">Seçimler</p>
          <p className="col-start-2 row-start-1 text-right">
            {ingredientPrice}₺
          </p>
          <p className="col-start-1 row-start-2 text-red">Toplam</p>
          <p className="col-start-2 row-start-2 text-right text-red">
            {totalPrice}₺
          </p>
        </div>
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn btn-neutral w-full border-yellow !bg-yellow text-black hover:!bg-amber-200"
          onClick={handleSubmit}
          disabled={disabled}
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

SendOrder.propTypes = {
  ingredientPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
