import { CSSObject } from "@emotion/css";

export const baseButtonStyle: CSSObject = {
  position: "relative",
  display: "block",
  background: "transparent",
  width: "200px",
  height: "60px",
  textAlign: "center",
  fontSize: "15px",
  lineHeight: "60px",
  cursor: "pointer",
  border: "none",

  "&:before, &:after": {
    width: "200px",
    left: 0,
    height: "27px",
    zIndex: -1,
    background: "transparent",
    border: "1px solid #D0D0D8",
  },
  "&:before": {
    position: "absolute",
    content: "''",
    borderBottom: "none",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    transform: "perspective(15px) rotateX(7deg)",
  },
  "&:after": {
    position: "absolute",
    top: "32px",
    content: "''",
    borderTop: "none",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    transform: "perspective(15px) rotateX(-7deg)",
  },

  "&:hover::before, &:hover::after": {
    borderColor: "#FF8B37",
  },
  "&:hover span:before, &:hover span:after": {
    backgroundColor: "#FF8B37",
  },
};

export const contentButtonStyle: CSSObject = {
  "&:before, &:after": {
    position: "absolute",
    content: "''",
    width: "17px",
    height: "1px",
    verticalAlign: "super",
    backgroundColor: "#D0D0D8",
    display: "block",
    top: "50%",
  },
  "&:before": {
    left: "100%",
    transform: "translateX(80%)",
  },
  "&:after": {
    right: "100%",
    transform: "translateX(-70%)",
  },
};
