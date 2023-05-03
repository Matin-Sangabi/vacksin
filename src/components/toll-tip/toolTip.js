import * as React from "react";
import { TiLocation } from "react-icons/ti";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

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

export default function BasicTooltip({ children, title }) {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography
            color="inherit"
            className="flex items-center justify-center gap-x-2 text-blue-950"
          >
            {" "}
            <span
              className={`${
                title.length >= 10 ? "text-base" : "text-lg"
              } font-bold text-blue-950`}
            >
              {title}
            </span>
            <span className="text-xl text-blue-950">
              <TiLocation />
            </span>
          </Typography>
          <div className="flex items-center gap-x-2 pt-2">
            <ToolTipDesc name={"تعداد"} num={120} />
            <ToolTipDesc name={"بهبود"} num={150320} />
            <ToolTipDesc name={"مرگ و میر"} num={120} />
          </div>
        </React.Fragment>
      }
    >
      {children}
    </HtmlTooltip>
  );
}

const ToolTipDesc = ({ name, num }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-blue-950 font-bold text-lg ">
        {num > 1000 ? `${Math.trunc(num / 1000)}k` : Math.round(num)}
      </span>
      <span className="text-gray-400 text-xs">{name}</span>
    </div>
  );
};
