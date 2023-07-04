import { Link } from "react-router-dom";
import { css } from "../../css";
import { linkStyle } from "./style.ts";
import { useTheme } from "../../theme";

interface StyledLinkProps {
  to: string;
  text: string;
  onClick?: () => void;
}

export const StyledLink = ({ to, text, onClick }: StyledLinkProps) => {
  const theme = useTheme();
  return (
    <Link to={to} className={css(linkStyle(theme))} onClick={onClick}>
      {text}
    </Link>
  );
};
