import { Link } from "react-router-dom";
import { navbar } from "./data/navData.json";

export default function Navbar() {
  return (
    <nav className="mx-auto leading-8 text-dark-gray">
      <ul className="my-3 grid grid-flow-row grid-cols-2 justify-center justify-items-center gap-4 gap-x-0 px-20 py-7 font-quattrocento text-base sm:my-3 sm:flex sm:w-full sm:gap-1 sm:p-2">
        {navbar.map((item) => (
          <li
            key={item.id}
            className="w-[135px] rounded-full p-2 font-barlow text-dark-gray transition duration-300 hover:bg-dark-gray hover:text-white"
          >
            <Link to="/order">
              <div className="flex items-center gap-2 sm:justify-center">
                <img
                  loading="lazy"
                  src={item.imageUrl}
                  alt="navbar-logo"
                  className="aspect-square w-6 shrink-0"
                />
                <span className="my-auto">{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
