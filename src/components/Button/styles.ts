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
  color: colors.orange100
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
  changeState: boolean,
) =>
  changeState ? buttonStatesMap[state](theme) : buttonStatesMap.active(theme);

export const baseButtonStyle = (
  theme: ThemeType,
  state: ButtonState,
  changeState: boolean,
  interactive: boolean
): CSSObject => ({
  position: "relative",
  display: "block",
  maxWidth: "400px",
  minWidth: "200px",
  height: "60px",
  textAlign: "center",
  fontSize: "15px",
  lineHeight: "60px",
  cursor: "pointer",
  pointerEvents: interactive ? "auto" : "none",
  border: `1px solid ${theme.colors.black40}`,
  borderRadius: "10px",
  ...getStateStyle(theme, state, changeState),

  "&:hover": {
    borderColor: state === "inactive" ? "unset" : theme.colors.orange100,
  },

  // "&:before, &:after": {
  //   width: "100%",
  //   left: 0,
  //   height: "28px",
  //   zIndex: 1,
  //   border: "1px solid #D0D0D8",
  //   ...getStateStyle(state, changeState),
  // },
  // "&:before": {
  //   position: "absolute",
  //   content: "''",
  //   borderBottom: "none",
  //   borderTopLeftRadius: "5px",
  //   borderTopRightRadius: "5px",
  //   transform: "perspective(15px) rotateX(7deg)",
  // },
  // "&:after": {
  //   position: "absolute",
  //   top: "32px",
  //   content: "''",
  //   borderTop: "none",
  //   borderBottomLeftRadius: "5px",
  //   borderBottomRightRadius: "5px",
  //   transform: "perspective(15px) rotateX(-7deg)",
  // },
  //
  // "&:hover::before, &:hover::after": {
  //   borderColor: "#FF8B37",
  // },
  // "&:hover span:before, &:hover span:after": {
  //   backgroundColor: "#FF8B37",
  // },
});

// export const contentButtonStyle: CSSObject = {
//   position: "relative",
//   zIndex: 2,
//   display: "inline-block",
//   width: "100%",
//   pointerEvents: "none",
//
//   "&:before, &:after": {
//     position: "absolute",
//     content: "''",
//     width: "17px",
//     height: "1px",
//     verticalAlign: "super",
//     backgroundColor: "#D0D0D8",
//     display: "block",
//     top: "50%",
//   },
//   "&:before": {
//     left: "100%",
//     transform: "translateX(80%)",
//   },
//   "&:after": {
//     right: "100%",
//     transform: "translateX(-70%)",
//   },
// };
