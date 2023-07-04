import { MouseEventHandler, ReactNode } from "react";
import { baseButtonStyle } from "./styles.ts";
import { css } from "../../css";
import { ButtonState } from "./types.ts";
import { useTheme } from "../../theme";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  state?: ButtonState;
  changeState: boolean;
  interactive?: boolean;
}

export const Button = ({
  children,
  onClick,
  state = "active",
  changeState,
  interactive = true,
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <button
      type="button"
      className={css({
        ...baseButtonStyle(theme, state, changeState, interactive),
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
