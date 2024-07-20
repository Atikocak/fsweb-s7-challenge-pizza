import OrderForm from "@/order-form/OrderForm";
import Product from "@/order-product/Product";
import Layout from "layout/Layout";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./data/productData.json";

export default function Order() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useState(() => {
    const product = products.find((product) => product.id === parseInt(id));
    setProduct(product);
  }, []);

  return (
    <Layout product={product}>
      <div className="bg-beige">
        <Product product={product} />
      </div>
      <div className="bg-white">
        <OrderForm product={product} />
      </div>
    </Layout>
  );
}
