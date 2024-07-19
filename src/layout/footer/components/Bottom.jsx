export default function Bottom() {
  return (
    <section className="flex w-full py-8 text-white">
      <div className="flex w-full items-center justify-between">
        <small className="text-xs">&copy; 2024 Teknolojik Yemekler.</small>
        <a href="#" aria-label="Twitter hesabımızı ziyaret edin">
          <img
            src="Assets/mile2-aseets/footer/twitter.svg"
            className="brightness-[103%] contrast-[103%] hue-rotate-0 invert saturate-[42%] sepia-0 filter"
            alt=""
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
