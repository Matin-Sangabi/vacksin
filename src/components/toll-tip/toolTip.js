import * as React from "react";
import { TiLocation } from "react-icons/ti";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { BiLoaderCircle } from "react-icons/bi";
import { intToString } from "@/utils/intToString";
import MapDesc from "../description/mapDesc";
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f8fafc",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    borderRadius: 20,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    padding: "0.5rem",
  },
}));

export default function BasicTooltip({
  children,
  title,
  isLoading,
  openTitle,
}) {
  if (isLoading)
    return (
      <HtmlTooltip title={openTitle && <LoadingToolTip />}>
        {children}
      </HtmlTooltip>
    );
  if (!isLoading && !title) {
    return <HtmlTooltip>{children}</HtmlTooltip>;
  }
  return (
    <HtmlTooltip title={openTitle && <ToolTipCase title={title} />}>
      {children}
    </HtmlTooltip>
  );
}

const ToolTipCase = ({ title }) => {
  return (
    <React.Fragment>
      <Typography
        color="inherit"
        className="flex items-center justify-center gap-x-2 w-36 text-blue-950"
      >
        {" "}
        <span
          className={`${
            title.country.length >= 10 ? "text-base" : "text-lg"
          } font-bold text-blue-950`}
        >
          {title.country}
        </span>
        <span className="text-xl text-blue-950">
          <TiLocation />
        </span>
      </Typography>
      <MapDesc data={title} />
    </React.Fragment>
  );
};
const LoadingToolTip = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-44 h-20 rounded-3xl">
        <span className="animate-spin text-2xl text-blue-700">
          <BiLoaderCircle />
        </span>
      </div>
    </React.Fragment>
  );
};
