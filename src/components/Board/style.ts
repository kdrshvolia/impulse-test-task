import { CSSObject } from "@emotion/css";
import { ThemeType } from "../../theme";

export const boardContainerStyle: CSSObject = {
  display: "flex",
};

export const questionSectionStyle = ({ colors }: ThemeType): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  justifyContent: "space-between",
  background: colors.black5,
  flexBasis: ["100%", "75%"],
  padding: ["20px", "75px"],
  height: "100vh",
  overflowX: "hidden",
});

export const optionsListStyle: CSSObject = {
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr 1fr"],
  gap: "10px 57px",
};

export const levelContainerStyle = (
  { colors }: ThemeType,
  isOpen: boolean
): CSSObject => ({
  display: "flex",
  flexDirection: "column-reverse",
  padding: "30px",
  gap: "10px",
  background: [colors.black5, colors.white],
  flexBasis: ["100%", "25%"],
  transform: [isOpen ? "translateX(0)" : "translateX(100%)", "translateX(0)"],
  position: ["absolute", "static"],
  top: 0,
  left: 0,
  transition: "transform 500ms ease-in-out",
  width: "100%",
});
