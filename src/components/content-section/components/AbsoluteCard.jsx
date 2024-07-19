export default function AbsoluteCard() {
  return (
    <div className="bg-card-1 aspect-[396/334] w-full rounded-md bg-cover bg-center bg-no-repeat">
      <div className="max-w-64 p-6">
        <h3 className="font-quattrocento text-5xl font-semibold text-white">
          Özel Lezzetus
        </h3>
        <p className="py-6 font-barlow text-base text-white antialiased sm:py-4">
          Position:Absolute Acı Burger
        </p>
        <button className="rounded-full bg-white px-5 py-3 font-barlow text-xs font-bold text-red transition duration-300 hover:bg-yellow hover:text-dark-gray">
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}
