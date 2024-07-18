import { Link } from "react-router-dom";
import { navbar } from "./data/navData.json";

export default function Navbar() {
  return (
    <nav className="mx-auto text-dark-gray">
      <ul className="my-3 grid grid-flow-row grid-cols-2 justify-center justify-items-center gap-4 gap-x-0 px-20 py-4 font-quattrocento text-sm sm:my-3 sm:flex sm:w-full sm:gap-2 sm:p-2">
        {navbar.map((item) => (
          <li
            key={item.id}
            className="w-32 gap-2 rounded-full p-2 font-barlow text-dark-gray transition duration-300 hover:bg-dark-gray hover:text-white"
          >
            <Link to="/order">
              <div className="flex items-center justify-center gap-2">
                <img src={item.imageUrl} className="w-6" />
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
