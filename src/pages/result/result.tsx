import { BasePageTemplate } from "../../components/basePageTemplate";
import Hand from "../../assets/hand.svg";
import { ROUTES } from "../../constants/routes.ts";
import { css } from "../../css";
import { headerStyle } from "../start-page/style.ts";
import { rightColumnStyle, subtitleStyle } from "./style.ts";

export const Result = () => (
  <BasePageTemplate
    imgSrc={Hand}
    linkHref={ROUTES.gameBoard}
    rightColumnContent={
      <div className={css(rightColumnStyle)}>
        <h2 className={css(subtitleStyle)}>Total score:</h2>
        <h1 className={css(headerStyle)}>$8,000 earned</h1>
      </div>
    }
    linkText="Try again"
  />
);
