/**
 * SendOrder component
 * Renders the order total and submit button for the pizza order form.
 * @component of OrderForm
 */
export default function SendOrder({
  ingredients,
  amount,
  totalPrice,
  disabled,
}) {
  return (
    <div className="card min-w-[352px] bg-base-100 shadow-xl sm:w-72">
      <div className="card-body">
        <h3 className="card-title font-bold">Sipariş Toplamı</h3>
        <div className="grid grid-flow-col grid-rows-2">
          <p className="col-start-1 row-start-1 font-semibold">Seçimler</p>
          <p className="col-start-2 row-start-1 text-right">
            {ingredients * 5 * amount}₺
          </p>
          <p className="col-start-1 row-start-2 font-semibold text-red">
            Toplam
          </p>
          <p className="col-start-2 row-start-2 text-right text-red">
            {totalPrice}₺
          </p>
        </div>
      </div>
      <div className="card-actions justify-end">
        <button
          type="submit"
          className="btn btn-neutral w-full border-yellow !bg-yellow font-sans text-black hover:!bg-amber-200"
          disabled={disabled}
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}
