import OrderForm from "@/order-form/OrderForm";
import Layout from "layout/Layout";

export default function Order() {
  return (
    <Layout>
      <div className="mx-auto w-[548px] p-4">
        <div>Product Information</div>
        <div>
          <h2>Product Order Form</h2>
          <OrderForm />
        </div>
      </div>
    </Layout>
  );
}
