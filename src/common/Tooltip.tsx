import {
    Tooltip,
    createStyles,
    makeStyles,
    Theme,
    withStyles,
    MenuItem
  } from "@material-ui/core";
  
export const InfoOnlyTooltip = withStyles({
    tooltip: {
      color: "#32325d",
      backgroundColor: "#FFF",
      fontFamily: `"Open Sans", sans-serif !important`,
      fontSize: 12,
      boxShadow: "0 2px 12px 0 rgba(50, 50, 93, 0.21)"
    },
    arrow: {
      color: "white",
      fontSize: 13,
      // boxShadow: "0 2px 12px 0 rgba(50, 50, 93, 0.21)"
      boxShadow: "-1px -1px 0px -2px rgba(50, 50, 93, 0.21)"
    }
  })(Tooltip);