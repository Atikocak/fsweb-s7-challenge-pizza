import AbsoluteCard from "./components/AbsoluteCard";
import HackathlonCard from "./components/HackathlonCard";
import NpmCard from "./components/NpmCard";

export default function ShowcaseSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <AbsoluteCard />
      <div className="grid grid-cols-1 gap-4">
        <HackathlonCard />
        <NpmCard />
      </div>
    </div>
  );
}
