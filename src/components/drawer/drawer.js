import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import { FiLoader } from "react-icons/fi";
import { WorldMap } from "../worldMap/worldMap";
import MapDesc from "../description/mapDesc";

export default function WorldDrawer({ onClick, anchor, isLoading, covidData }) {
  const list = (anchor, isLoading, covidData) => {
    if (isLoading) {
      return (
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
          role="presentation"
          onClick={() => onClick(false)}
          onKeyDown={() => onClick(false)}
        >
          <div className="flex items-center justify-center p-2 h-52">
            <span className="animate-spin text-2xl text-blue-700">
              <FiLoader />
            </span>
          </div>
          <Divider />
        </Box>
      );
    } else if (!isLoading && covidData) {
      return (
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
          role="presentation"
          onClick={() => onClick(false)}
          onKeyDown={() => onClick(false)}
        >
          <div className="flex flex-col gap-y-4 h-52 p-10">
            <div className="flex justify-center items-center gap-x-4">
              <div className="w-20">
                <img src={`${covidData.countryInfo.flag}`} alt="flag" />
              </div>
              <span>{covidData.country}</span>
            </div>
            <MapDesc data={covidData} />
          </div>
          <Divider />
        </Box>
      );
    }
  };

  return (
    <div className="">
      <React.Fragment>
        <WorldMap onClick={onClick} />
        <SwipeableDrawer
          anchor={"bottom"}
          open={anchor}
          onClose={() => onClick(false)}
          onOpen={() => onClick(true)}
        >
          {list("bottom", isLoading, covidData)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
/**
 * <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => onClick(false)}
      onKeyDown={() => onClick(false)}
    >
      <ul className="flex flex-col gap-y-2">
        <div>hello</div>
        <div>hello</div>
      </ul>
      <Divider />
    </Box>
 */
