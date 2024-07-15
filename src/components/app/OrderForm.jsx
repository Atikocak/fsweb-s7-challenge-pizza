import { useState } from "react";
import Dough from "../data/Dough";
import Ingredients from "../data/Ingredients";
import Size from "../data/Size";

export default function OrderForm() {
  const [orderAmount, setOrderAmount] = useState(1);
  const [dough, setDough] = useState("");

  const increaseAmount = () => {
    setOrderAmount((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    if (orderAmount > 1) {
      setOrderAmount((prev) => prev - 1);
    }
  };

  const handleDoughChange = (e) => {
    setDough(e.target.value);
  };

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value);
    setOrderAmount(isNaN(value) || value < 1 ? 1 : value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div id="form-dimension" className="mt-4 flex justify-between">
        <Size />
        <Dough dough={dough} handleChange={handleDoughChange} />
      </div>
      <div id="form-ingredients">
        <h3 className="text-lg font-bold">Ek Malzemeler</h3>
        <p className="py-2 text-sm">
          En fazla <span className="font-bold underline">10</span> adet malzeme
          seçebilirsiniz. <span className="font-bold underline">5₺</span>
        </p>
        <Ingredients />
      </div>
      <div id="form-order-message">
        <label htmlFor="order-message" className="label text-lg font-bold">
          Sipariş Notu
        </label>
        <input
          type="text"
          id="order-message"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          className="textarea textarea-bordered textarea-sm w-full"
        />
      </div>
      <hr className="mt-4" />
      <div id="form-order-complete" className="flex justify-between">
        <div
          id="form-order-amount"
          className="mt-4 flex items-start justify-center space-x-2"
        >
          <button
            id="decrease-order-amount"
            className="btn btn-sm w-6"
            onClick={decreaseAmount}
          >
            -
          </button>
          <input
            id="order-amount-input"
            type="number"
            value={orderAmount}
            onChange={handleAmountChange}
            className="input input-sm input-bordered !ml-0 w-12 text-center"
          />
          <button
            id="increase-order-amount"
            className="btn btn-sm !ml-0 w-6"
            onClick={increaseAmount}
          >
            +
          </button>
        </div>
        <div id="form-submit">
          <div className="card w-72 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title font-bold">Sipariş Toplamı</h3>
              <div className="grid grid-flow-col grid-rows-2">
                <p className="col-start-1 row-start-1">Seçimler</p>
                <p className="col-start-2 row-start-1 text-right">25.00₺</p>
                <p className="col-start-1 row-start-2 text-red">Toplam</p>
                <p className="col-start-2 row-start-2 text-right text-red">
                  110.60₺
                </p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral w-full">SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
