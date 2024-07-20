import Layout from "layout/Layout";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <Layout background="bg-red">
      <div className="mx-auto h-full w-[586px] p-4 text-center">
        <p className="font-satisfy text-xl leading-5 text-yellow">
          lezzetin yolda
        </p>
        <h2 className="text-center font-roboto text-5xl font-light leading-[70px] text-white antialiased">
          SİPARİŞ ALINDI
        </h2>
        <hr className="mx-auto w-[420px]" />
        {order ? (
          <>
            <h2 className="mt-2 font-barlow text-lg font-semibold text-white">
              {order.product}
            </h2>
            <div className="mx-auto mt-2 w-48 text-left font-barlow text-sm text-white">
              <p>
                Boyut: <span className="font-bold">{order.size}</span>
              </p>
              <p>
                Hamur: <span className="font-bold">{order.dough}</span>
              </p>
              <p>
                Ek Malzemeler:{" "}
                <span className="font-bold">
                  {order.ingredients.join(", ") || "Yok"}
                </span>
              </p>
            </div>
            <div className="mx-auto mt-2 w-80 rounded-lg border-2 border-white p-8 text-left font-barlow text-white">
              <h3 className="text-xl font-semibold">Sipariş Toplamı</h3>
              <div className="grid grid-flow-col grid-rows-2">
                <p className="col-start-1 row-start-1">Seçimler</p>
                <p className="col-start-2 row-start-1 text-right">
                  {order.ingredients.length * order.amount}₺
                </p>
                <p className="col-start-1 row-start-2">Toplam</p>
                <p className="col-start-2 row-start-2 text-right">
                  {order.price}₺
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="mt-7 font-barlow text-xl font-semibold text-white">
              Sipariş detaylarına ulaşılamadı.
            </h2>
          </>
        )}
      </div>
    </Layout>
  );
}
