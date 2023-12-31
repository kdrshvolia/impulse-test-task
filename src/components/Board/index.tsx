import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import _data from "../../data.json";
import { css } from "../../css";
import { boardContainerStyle } from "./style.ts";
import { Level } from "./Level.tsx";
import { ButtonState } from "../Button/types.ts";
import { CurrentQuestion, OptionType } from "./types.ts";
import { ROUTES } from "../../constants/routes.ts";
import { Question } from "./Question.tsx";
import { GameContext } from "../../gameContext";

export const Board = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { setCurrentScore } = useContext(GameContext);
  const currentQuestionItem: CurrentQuestion =
    _data.questions[currentQuestionIndex];
  const values = _data.questions.map((item) => item.Value);
  const [buttonState, setButtonState] = useState<ButtonState>("active");
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const redirectToResult = () => setTimeout(() => {
    navigate(ROUTES.resultPage);
  }, 1500);

  const handleOptionButtonClick = (item: OptionType, index: number) => {
    setActiveIndex(index);
    setButtonState("selected");
    setTimeout(() => {
      if (item.IsCorrect) {
        setButtonState("correct");
        setCurrentScore(Number(currentQuestionItem.Value));
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
          setButtonState("active");
        }, 1500);
        if (index >= _data.questions.length) {
          redirectToResult()
        }
      } else {
        setButtonState("wrong");
        redirectToResult();
      }
    }, 1000);
  };

  return (
    <div className={css(boardContainerStyle)}>
      <Question
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentQuestionItem={currentQuestionItem}
        handleOptionButtonClick={handleOptionButtonClick}
        activeIndex={activeIndex}
        buttonState={buttonState}
      />
      <Level
        options={values}
        currentIndex={currentQuestionIndex}
        isOpen={menuOpen}
      />
    </div>
  );
};
