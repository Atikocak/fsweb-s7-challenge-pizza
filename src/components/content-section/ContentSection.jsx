import AbsoluteCard from "./components/AbsoluteCard";
import HackathlonCard from "./components/HackathlonCard";
import NpmCard from "./components/NpmCard";

export default function ContentSection() {
  return (
    <div className="w-full bg-beige">
      <div className="mx-auto max-w-4xl px-8 py-10 sm:px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AbsoluteCard />
          <div className="grid grid-cols-1 gap-4">
            <HackathlonCard />
            <NpmCard />
          </div>
        </div>
        <div className="mt-8">Popular items go here</div>
        <div className="mt-8">Foods go here</div>
      </div>
    </div>
  );
}
