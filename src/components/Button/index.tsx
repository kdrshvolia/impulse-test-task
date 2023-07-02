import { ReactNode } from "react";
import { baseButtonStyle, contentButtonStyle } from "./styles.ts";
import { css } from "../../css";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button type="button" className={css(baseButtonStyle)}>
    <span className={css(contentButtonStyle)}>{children}</span>
  </button>
);
