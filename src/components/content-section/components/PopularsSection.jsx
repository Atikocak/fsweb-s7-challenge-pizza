import Popular from "@/navbar/Popular";

export default function PopularsSection() {
  return (
    <div className="mt-8 text-center">
      <span className="font-satisfy text-xl text-red">
        en çok paketlenen menüler
      </span>
      <h3 className="font-barlow text-3xl font-semibold">
        Acıktıran Kodlara Doyuran Lezzetler
      </h3>
      <Popular />
    </div>
  );
}
