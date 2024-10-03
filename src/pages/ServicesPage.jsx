import JourneyScroll from "../components/journeyScroll/JourneyScroll";
import Prices from "../components/prices/Prices";

export default function ServicesPage() {
  return (
    <div>
      <JourneyScroll title="my services" className="pt-0 px-20 pb-20" />
      <Prices />
    </div>
  );
}
