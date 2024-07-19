import Bottom from "./components/Bottom";
import { contact, hotMenu, instagram } from "./data/footerData.json";

export default function Footer() {
  return (
    <div className="divide-y divide-slate-800">
      <footer className="bg-footer flex w-full flex-col justify-end p-4 text-center text-white max-md:mt-10 max-md:max-w-full">
        <div className="mx-auto flex max-w-full justify-between gap-[80px] pt-16">
          <div className="flex justify-stretch gap-16">
            <div>
              <img
                src="Assets/mile2-aseets/footer/logo-footer.svg"
                className="subpixel-antialiased"
              />
              <ul className="mt-10 flex flex-col gap-4">
                {contact.map((item) => (
                  <li
                    key={item.id}
                    className="flex w-52 items-center gap-2 font-barlow text-sm"
                  >
                    <img src={item.icon} className="h-5 w-5" />
                    <p className="flex flex-wrap text-left">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-8">
            <h3 className="mb-6 text-left text-xl">Hot Menu</h3>
            <ul className="flex flex-col items-start gap-4">
              {hotMenu.map((item) => (
                <li key={item.id} className="font-barlow text-sm">
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8">
            <h3 className="mb-6 text-left text-xl">Instagram</h3>
            <ul className="grid grid-flow-row grid-cols-3 justify-end gap-2">
              {instagram.map((item) => (
                <li key={item.id}>
                  <img src={item.url} className="w-20" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <Bottom />
    </div>
  );
}
