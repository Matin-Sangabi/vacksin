import React, { Fragment, memo, useEffect, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import BasicTooltip from "../toll-tip/toolTip";
import { useRouter } from "next/router";

const WorldMap = ({ covidData, isLoading }) => {
  const router = useRouter();
  const [openTitle, setOpenTitle] = useState(false);
  return (
    <section className="max-w-screen-xl mx-auto ">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <h1 className="text-4xl text-blue-950 font-bold">نقشه توزیع covid-19</h1>
        <p className="text-slate-400">در نقشه زیر توزیع موارد کوید 19 آمده است ...</p>
      </div>
      <ComposableMap className="relative">
        <Geographies
          geography="/features.json"
          className="cursor-pointer"
          stroke="#"
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Fragment key={geo.rsmKey}>
                <BasicTooltip
                  title={covidData}
                  openTitle={openTitle}
                  isLoading={isLoading}
                >
                  <Geography
                    className="relative"
                    geography={geo}
                    onClick={() => {
                      router.push(
                        {
                          pathname: "/",
                          query: { country: geo.id },
                        },
                        undefined,
                        { scroll: false }
                      );
                      setOpenTitle(true);
                    }}
                    onMouseLeave={() => {
                      setOpenTitle(false);
                    }}
                    style={{
                      default: {
                        fill: "#cbd5e1",
                        outline: "none",
                      },
                      hover: {
                        fill: "#94a3b8",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#64748b",
                        outline: "none",
                      },
                    }}
                  />
                </BasicTooltip>
              </Fragment>
            ))
          }
        </Geographies>
      </ComposableMap>
    </section>
  );
};

export default memo(WorldMap);
