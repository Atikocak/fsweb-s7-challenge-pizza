import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function HackathlonCard() {
  return (
    <div className="bg-card-2 aspect-[396/160] w-full rounded-md bg-cover bg-center bg-no-repeat">
      <div className="max-w-48 p-6">
        <h3 className="mb-4 font-barlow text-2xl font-semibold text-white">
          Hackathlon Burger Menü
        </h3>
        <Link to={`/order/3`}>
          <Button />
        </Link>
      </div>
    </div>
  );
}
