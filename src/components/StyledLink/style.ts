import { CSSObject } from "@emotion/css";
import { ThemeType } from "../../theme";

export const linkStyle = ({ colors }: ThemeType): CSSObject => ({
  maxWidth: ["unset", "296px"],
  width: ["100%", "296px"],
  backgroundColor: colors.orange100,
  borderRadius: "12px",
  border: "none",
  padding: ["16px 0", "23px 0"],
  color: colors.white,
  fontSize: ["16px", "20px"],
  lineHeight: ["16px", "23px"],
  textDecoration: "none",
  textAlign: "center",
});
