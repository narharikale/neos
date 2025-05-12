import PrTabs from "../molecules/PrTabs";
import PrTitle from "./PrTitle";
import SideDetails from "./SideDetails";
import Update from "./Update";

function Timeline() {
  return (
    <div className="max-w-7xl m-auto">
      <PrTitle />
      <PrTabs />

      <div className="flex flex-col lg:flex-row gap-4">
        <Update />
        <SideDetails />
      </div>
    </div>
  );
}

export default Timeline;
