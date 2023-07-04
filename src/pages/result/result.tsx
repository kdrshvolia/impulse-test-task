import { useContext } from "react";
import { BasePageTemplate } from "../../components/BasePageTemplate";
import Hand from "../../assets/hand.svg";
import { ROUTES } from "../../constants/routes.ts";
import { css } from "../../css";
import { headerStyle } from "../start-page/style.ts";
import { rightColumnStyle, subtitleStyle } from "./style.ts";
import { GameContext } from "../../gameContext";

export const Result = () => {
  const { currentScore, setCurrentScore } = useContext(GameContext);

  return (
    <BasePageTemplate
      imgSrc={Hand}
      linkHref={ROUTES.gameBoard}
      rightColumnContent={
        <div className={css(rightColumnStyle)}>
          <h2 className={css(subtitleStyle)}>Total score:</h2>
          <h1
            className={css(headerStyle)}
          >{`$ ${currentScore.toLocaleString()} earned`}</h1>
        </div>
      }
      linkText="Try again"
      onLinkClick={() => setCurrentScore(0)}
    />
  );
};
