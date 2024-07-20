import { Link } from "react-router-dom";
import { products } from "./data/productData.json";

export default function ProductsSection() {
  return (
    <div className="mt-8 flex gap-6">
      {products.map((product) => (
        <Link to={`/order/${product.id}`} key={product.id}>
          <div className="flex flex-col gap-2 rounded-lg bg-white p-6 font-barlow transition duration-300 hover:bg-dark-gray hover:text-white">
            <img src={product.imageUrl} />
            <h3 className="font-semibold">{product.title}</h3>
            <div className="flex justify-between">
              <div>
                <span className="text-xs">{product.rating}⭐</span>
                <span className="text-xs">({product.reviews})</span>
              </div>
              <span className="font-bold">{product.price}₺</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
