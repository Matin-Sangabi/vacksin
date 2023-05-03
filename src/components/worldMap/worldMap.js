import React, { Fragment, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import BasicTooltip from "../toll-tip/toolTip";

const WorldMap = ({ content, setTooltipContent }) => {
  console.log(content);
  return (
    <div data-tip="" className="max-w-screen-lg mx-auto ">
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
                      setTooltipContent(`${geo.properties.name}`);
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
