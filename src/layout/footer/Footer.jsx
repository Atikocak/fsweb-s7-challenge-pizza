import Bottom from "./components/Bottom";
import { contact, hotMenu, instagram } from "./data/footerData.json";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-4xl px-8 sm:px-4">
        <div className="divide-y divide-slate-800">
          <section className="py-10">
            <div className="grid grid-flow-row grid-cols-1 sm:flex sm:justify-between sm:gap-[80px]">
              <div className="flex justify-stretch gap-16">
                <div>
                  <img
                    src="Assets/mile2-aseets/footer/logo-footer.svg"
                    className="subpixel-antialiased"
                    alt="Teknolojik Yemekler Logo"
                  />
                  <address className="mt-10 not-italic">
                    <ul className="flex flex-col gap-4">
                      {contact.map((item) => (
                        <li
                          key={item.id}
                          className="flex w-52 items-center gap-2 font-barlow text-sm"
                        >
                          <img
                            src={item.icon}
                            className="h-5 w-5"
                            alt=""
                            aria-hidden="true"
                          />
                          <p className="flex flex-wrap text-left text-white">
                            {item.value}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </address>
                </div>
              </div>
              <nav className="py-8 sm:py-0">
                <h2 className="mb-6 text-left text-xl text-white">Hot Menu</h2>
                <ul className="flex flex-col items-start gap-4">
                  {hotMenu.map((item) => (
                    <li
                      key={item.id}
                      className="font-barlow text-sm text-white"
                    >
                      <a href="#" className="hover:underline">
                        {item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <section className="py-8 sm:py-0">
                <h2 className="mb-6 text-left text-xl text-white">Instagram</h2>
                <ul className="grid grid-flow-row grid-cols-3 justify-end gap-x-2 gap-y-6 sm:gap-x-2 sm:gap-y-[38px]">
                  {instagram.map((item) => (
                    <li key={item.id}>
                      <a href="#" aria-label={`Instagram post ${item.id}`}>
                        <img src={item.url} className="w-20" alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
          <Bottom />
        </div>
      </div>
    </footer>
  );
}
