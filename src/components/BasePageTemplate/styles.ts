import { CSSObject } from "@emotion/css";
import { ThemeType } from "../../theme";

export const pageContainerStyle = ({ colors }: ThemeType): CSSObject => ({
  background: `linear-gradient(to right bottom, ${colors.white} 50%, ${colors.orange5} 50%)`,
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  padding: "20px",
});

export const contentContainerStyle: CSSObject = {
  display: "flex",
  flexDirection: ["column", "row"],
  gap: "30px",
  alignItems: ["stretch", "center"],
  maxWidth: "1234px",
};

export const rightColumnStyle: CSSObject = {
  display: "flex",
  gap: "64px",
  flexDirection: "column",
  justifyContent: "space-between",
  flexBasis: "50%",
};
