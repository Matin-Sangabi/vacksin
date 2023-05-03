import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";


const WorldMap = ({ setTooltipContent }) => {
  
  return (
    <div data-tip="" className="max-w-screen-lg mx-auto ">
      <ComposableMap className="relative">
        <Geographies geography="/features.json" className="cursor-pointer">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                className="relative"
                key={geo.rsmKey}
                geography={geo}
                
                onClick={() => {
                  setTooltipContent(geo);
                }}
                
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(WorldMap);
