export default function NpmCard() {
  return (
    <div className="bg-card-3 aspect-[396/160] w-full rounded-md bg-cover bg-center bg-no-repeat">
      <div className="max-w-56 p-6">
        <h3 className="mb-4 font-barlow text-2xl font-semibold text-dark-gray">
          <span className="text-red">Çoooook </span>
          hızlı npm gibi kurye
        </h3>
        <button className="rounded-full bg-white px-5 py-3 font-barlow text-xs font-bold text-red transition duration-300 hover:bg-yellow hover:text-dark-gray">
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}
