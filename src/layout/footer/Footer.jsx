import Bottom from "./components/Bottom";

export default function Footer() {
  return (
    <div className="divide-y divide-slate-800">
      <footer className="mt-16 flex w-full flex-col justify-end bg-footer p-4 pt-14 text-center text-white max-md:mt-10 max-md:max-w-full">
        <div className="mx-auto w-[800px]">
          <div>Teknolojik Yemekler</div>
        </div>
      </footer>
      <Bottom />
    </div>
  );
}
