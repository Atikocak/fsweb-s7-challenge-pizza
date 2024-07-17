import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mx-auto text-[#292929]">
      <ul className="flex gap-4 p-2 font-quattrocento text-sm">
        <li className="rounded-md p-1 transition duration-300 hover:bg-yellow hover:text-black">
          <Link to="/order">Anasayfa</Link>
        </li>
        <li className="rounded-md p-1 transition duration-300 hover:bg-yellow hover:text-black">
          <Link to="/order">Seçenekler</Link>
        </li>
        <li className="rounded-md p-1 transition duration-300 hover:bg-yellow hover:text-black">
          <Link to="/order">Sipariş Oluştur</Link>
        </li>
      </ul>
    </nav>
  );
}
