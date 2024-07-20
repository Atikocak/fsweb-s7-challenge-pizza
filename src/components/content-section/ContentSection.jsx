import PopularsSection from "./components/PopularsSection";
import ProductsSection from "./components/ProductsSection";
import ShowcaseSection from "./showcase-section/ShowcaseSection";

export default function ContentSection() {
  return (
    <div className="w-full bg-beige">
      <div className="mx-auto max-w-4xl px-8 py-10 sm:px-4">
        <ShowcaseSection />
        <PopularsSection />
        <ProductsSection />
      </div>
    </div>
  );
}
