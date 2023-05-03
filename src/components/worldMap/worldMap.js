import React, { Fragment, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import BasicTooltip from "../toll-tip/toolTip";
import { useRouter } from "next/router";

const WorldMap = ({ content, setTooltipContent }) => {
  console.log(content);
  const router = useRouter();
  return (
    <div data-tip="" className="max-w-screen-xl mx-auto ">
      <ComposableMap className="relative">
        <Geographies geography="/features.json" className="cursor-pointer" stroke="#">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Fragment key={geo.rsmKey}>
                <BasicTooltip title={content}>
                  <Geography
                    className="relative"
                    geography={geo}
                    onClick={() => {
                      // setTooltipContent(geo);
                      router.push(`?country=${geo.id}`)
                    }}
                    onMouseLeave={() => setTooltipContent("")}
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
