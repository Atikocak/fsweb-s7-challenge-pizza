import { Link } from "react-router-dom";
import { populars } from "./data/navData.json";

export default function Popular() {
  return (
    <nav className="text-dark-gray">
      <ul className="my-3 grid grid-flow-row grid-cols-2 justify-between gap-x-10 gap-y-4 px-20 py-7 font-quattrocento text-base sm:my-3 sm:flex sm:w-full sm:gap-1 sm:p-2">
        {populars.map((item) => (
          <div key={item.id}>
            <Link to="/#">
              <li className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-barlow transition duration-300 hover:cursor-pointer hover:bg-dark-gray hover:text-white">
                <img
                  loading="lazy"
                  src={item.imageUrl}
                  alt={`popular-logo${item.id}`}
                  className="aspect-square w-6 shrink-0"
                />
                <span>{item.name}</span>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
}
