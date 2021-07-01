import { container, title } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
};

export default pillsStyle;
