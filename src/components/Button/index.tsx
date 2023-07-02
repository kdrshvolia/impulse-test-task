import { ReactNode } from "react";
import { baseButtonStyle } from "./styles.ts";
import { css } from "../../css";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button type="button" className={css(baseButtonStyle)}>
    {children}
  </button>
);
