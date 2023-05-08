import React, { Fragment, memo, useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import BasicTooltip from "../toll-tip/toolTip";
import { useRouter } from "next/router";

export const WorldMap = ({ onClick }) => {
  const router = useRouter();
  return (
    <ComposableMap className="relative">
      <Geographies
        geography="/features.json"
        className="cursor-pointer"
        stroke="#"
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Fragment key={geo.rsmKey}>
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
                  onClick(true);
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
            </Fragment>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};
export const ToolTipWorldMap = ({
  onClick,
  onMouse,
  covidData,
  isLoading,
  openTitle,
}) => {
  const router = useRouter();
  return (
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
                    onClick(true);
                  }}
                  onMouseLeave={() => {
                    onMouse(false);
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
  );
};
