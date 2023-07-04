import { CSSObject } from "@emotion/css";
import { ButtonState } from "./types.ts";
import { ThemeType } from "../../theme";

export const getActiveStyles = ({ colors }: ThemeType): CSSObject => ({
  backgroundColor: colors.white,
  borderColor: colors.black40,
});
export const getDisabledStyles = ({ colors }: ThemeType): CSSObject => ({
  backgroundColor: colors.white,
  borderColor: colors.black40,
  color: colors.black40,
});
export const getSelectedStyles = ({ colors }: ThemeType): CSSObject => ({
  backgroundColor: colors.orange5,
  borderColor: colors.orange100,
});
export const getWrongStyles = ({ colors }: ThemeType): CSSObject => ({
  backgroundColor: colors.red5,
  borderColor: colors.red100,
});

export const getCorrectStyles = ({ colors }: ThemeType): CSSObject => ({
  backgroundColor: colors.green5,
  borderColor: colors.green100,
});
export const getHoverStyles = ({ colors }: ThemeType): CSSObject => ({
  backgroundColor: colors.white,
  borderColor: colors.orange100,
  color: colors.orange100,
});

const buttonStatesMap = {
  active: getActiveStyles,
  inactive: getDisabledStyles,
  selected: getSelectedStyles,
  correct: getCorrectStyles,
  wrong: getWrongStyles,
  hover: getHoverStyles,
};

const getStateStyle = (
  theme: ThemeType,
  state: ButtonState,
  changeState: boolean
) =>
  changeState ? buttonStatesMap[state](theme) : buttonStatesMap.active(theme);

export const baseButtonStyle = (
  theme: ThemeType,
  state: ButtonState,
  changeState: boolean,
  interactive: boolean
): CSSObject => ({
  position: "relative",
  display: "flex",
  maxWidth: "400px",
  width: "100%",
  minWidth: "200px",
  height: interactive ? "60px" : "40px",
  textAlign: "center",
  fontSize: "15px",
  lineHeight: "60px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  pointerEvents: interactive ? "auto" : "none",
  border: `1px solid ${theme.colors.black40}`,
  borderRadius: "10px",
  ...getStateStyle(theme, state, changeState),

  "&:hover": {
    borderColor: ["unset", theme.colors.orange100],
  },
});

