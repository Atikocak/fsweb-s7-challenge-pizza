import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red">
      <div className="flex max-h-28 flex-col">
        <div className="mx-auto mt-6 font-roboto text-3xl font-black text-white">
          <h1>Teknolojik Yemekler</h1>
        </div>
        <nav className="mx-auto text-white">
          <ul className="flex gap-4 p-2 font-quattrocento text-sm">
            <li className="rounded-md p-1 transition duration-300 hover:bg-yellow hover:text-black">
              <Link to="/">Anasayfa</Link>
            </li>
            <li className="rounded-md p-1 transition duration-300 hover:bg-yellow hover:text-black">
              <Link to="/options">Seçenekler</Link>
            </li>
            <li className="rounded-md p-1 transition duration-300 hover:bg-yellow hover:text-black">
              <Link to="/order">Sipariş Oluştur</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
