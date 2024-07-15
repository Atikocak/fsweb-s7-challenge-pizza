import { Link } from "react-router-dom";

export default function HeroPage() {
  return (
    <div className="flex h-screen flex-col justify-start bg-red bg-home-banner bg-cover bg-center bg-no-repeat text-center">
      <div className="pt-16">
        <h1 className="font-roboto text-3xl font-black text-white antialiased">
          Teknolojik Yemekler
        </h1>
      </div>
      <div className="mx-auto mt-12 w-5/12 max-w-96">
        <h2 className="font-barlow text-5xl text-white antialiased">
          KOD ACIKTIRIR PIZZA, DOYURUR
        </h2>
      </div>
      <div className="mx-auto mt-4 w-32">
        <Link to="/order">
          <button className="w-full rounded-full border-solid border-black bg-yellow p-2 font-semibold shadow-xl transition duration-200 hover:bg-gray-200">
            ACIKTIM
          </button>
        </Link>
      </div>
    </div>
  );
}
