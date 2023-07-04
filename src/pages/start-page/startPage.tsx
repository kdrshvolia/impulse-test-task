import { css } from "../../css";
import { headerStyle } from "./style.ts";
import { ROUTES } from "../../constants/routes.ts";
import Hand from "../../assets/hand.svg";
import { BasePageTemplate } from "../../components/basePageTemplate";

export const StartPage = () => (
    <BasePageTemplate
      imgSrc={Hand}
      linkHref={ROUTES.gameBoard}
      rightColumnContent={
        <h1 className={css(headerStyle)}>Who wants to be a millionaire?</h1>
      }
      linkText="Start"
    />
  );
