import OrderForm from "../app/OrderForm";
import Layout from "../layout/Layout";

export default function OrderPage() {
  return (
    <Layout>
      <div className="p-4">
        <div>Product Information</div>
        <div>
          <h2>Product Order Form</h2>
          <OrderForm />
        </div>
      </div>
    </Layout>
  );
}
