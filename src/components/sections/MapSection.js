import { useRouter } from "next/router";
import { useState } from "react";
import WorldMap, { ToolTipWorldMap } from "../worldMap/worldMap";
import MapTooltip from "../toll-tip/toolTip";
import WorldDrawer from "../drawer/drawer";

const MapSection = ({ isLoading, covidData }) => {
  const [anchor, setAnchor] = useState(false);
  const [openTitle, setOpenTitle] = useState(false);
  const router = useRouter();
  const toggleDrawer = (open) => {
    setAnchor(open);
  };
  return (
    <section className="max-w-screen-lg px-2 mx-auto">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <h1 className="text-4xl text-blue-950 font-bold">
          نقشه توزیع covid-19
        </h1>
        <p className="text-slate-400">
          در نقشه زیر توزیع موارد کوید 19 آمده است ...
        </p>
      </div>
      <div className="hidden lg:block">
        <ToolTipWorldMap
          covidData={covidData}
          isLoading={isLoading}
          onClick={setOpenTitle}
          onMouse={setOpenTitle}
          openTitle={openTitle}
        />
      </div>
      <div className="lg:hidden block">
        <WorldDrawer
          isLoading={isLoading}
          onClick={toggleDrawer}
          anchor={anchor}
          covidData={covidData}
        />
      </div>
    </section>
  );
};

export default MapSection;
