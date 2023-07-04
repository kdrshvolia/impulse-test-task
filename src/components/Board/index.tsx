import { useState } from "react";
import { useNavigate } from "react-router-dom";
import _data from "../../data.json";
import { Button } from "../Button";
import { css } from "../../css";
import {
  boardContainerStyle,
  optionsListStyle,
  questionSectionStyle,
} from "./style.ts";
import { Level } from "./Level.tsx";
import { ButtonState } from "../Button/types.ts";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { OptionType } from "./types.ts";
import { ROUTES } from "../../constants/routes.ts";
import { useTheme } from "../../theme";

export const Board = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSum, setCurrentSum] = useState(0);
  const theme = useTheme();
  const currentQuestionItem = _data.questions[currentQuestionIndex];
  const values = _data.questions.map((item) => item.Value);
  const [buttonState, setButtonState] = useState<ButtonState>("active");
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleOptionButtonClick = (item: OptionType, index: number) => {
    setActiveIndex(index);
    setButtonState("selected");
    setTimeout(() => {
      if (item.IsCorrect) {
        setButtonState("correct");
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
          setButtonState("active");
        }, 1500);
      } else {
        setButtonState("wrong");
        setTimeout(() => {
          navigate(ROUTES.resultPage);
        }, 1500);
      }
    }, 1000);
  };

  return (
    <div className={css(boardContainerStyle)}>
      <div className={css(questionSectionStyle(theme))}>
        <div
          className={css({
            position: "relative",
            zIndex: 2,
            display: ["block", "none"],
          })}
        >
          {menuOpen ? (
            <Cross onClick={() => setMenuOpen(false)} />
          ) : (
            <Burger onClick={() => setMenuOpen(true)} />
          )}
        </div>
        <h2>{currentQuestionItem.QuestionText}</h2>
        <ul className={css(optionsListStyle)}>
          {currentQuestionItem.Options.map((item, index) => (
            <Button
              changeState={index === activeIndex}
              state={buttonState}
              onClick={() => handleOptionButtonClick(item, index)}
            >
              {item.Answer}
            </Button>
          ))}
        </ul>
      </div>
      <Level
        options={values}
        currentIndex={currentQuestionIndex}
        isOpen={menuOpen}
      />
    </div>
  );
};
