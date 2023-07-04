import { ReactNode } from "react";
import { css } from "../../css";
import {
  contentContainerStyle,
  pageContainerStyle,
  rightColumnStyle,
} from "./styles.ts";
import { StyledLink } from "../StyledLink";
import { useTheme } from "../../theme";

interface BasePageTemplateProps {
  imgSrc: string;
  linkHref: string;
  rightColumnContent: ReactNode;
  linkText: string;
  onLinkClick?: () => void;
}

export const BasePageTemplate = ({
  imgSrc,
  linkHref,
  rightColumnContent,
  linkText,
  onLinkClick,
}: BasePageTemplateProps) => {
  const theme = useTheme();
  return (
    <div className={css(pageContainerStyle(theme))}>
      <div className={css(contentContainerStyle)}>
        <img
          src={imgSrc}
          alt=""
          className={css({
            width: ["100%", "50%"],
            height: "auto",
            maxWidth: ["288px", "624px"],
            margin: "0 auto",
          })}
        />
        <div className={css(rightColumnStyle)}>
          {rightColumnContent}
          <StyledLink to={linkHref} text={linkText} onClick={onLinkClick} />
        </div>
      </div>
    </div>
  );
};
