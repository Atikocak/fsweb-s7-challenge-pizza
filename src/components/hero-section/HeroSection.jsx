import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="flex h-screen flex-col justify-start bg-red bg-home-banner bg-cover bg-center bg-no-repeat text-center">
      <div className="pt-16">
        <h1 className="font-londrina text-[50px] font-normal leading-[50px] text-white antialiased">
          Teknolojik Yemekler
        </h1>
      </div>
      <div className="mx-auto mt-12 min-h-[195px] w-full max-w-96 transition duration-300 sm:max-w-[750px]">
        <p className="font-satisfy text-[32px] font-normal leading-[44.27px] text-yellow">
          fırsatı kaçırma
        </p>
        <h2 className="font-roboto text-[86px] font-light leading-[92px] text-white antialiased">
          KOD ACIKTIRIR PIZZA, DOYURUR
        </h2>
      </div>
      <div className="mx-auto mt-4 w-48">
        <Link to="/order/2">
          <button className="rounded-full border-solid border-black bg-yellow px-12 py-2 font-barlow text-xl font-semibold leading-[45px] text-black shadow-xl transition duration-200 hover:bg-gray-200">
            ACIKTIM
          </button>
        </Link>
      </div>
    </div>
  );
}
