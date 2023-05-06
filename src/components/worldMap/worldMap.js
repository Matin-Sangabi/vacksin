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
    <div className="max-w-screen-xl mx-auto ">
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
    </div>
  );
};

export default memo(WorldMap);
