import { Dispatch, SetStateAction } from "react";
import { css } from "../../css";
import {
  additionalBar,
  optionsListStyle,
  questionSectionStyle,
} from "./style.ts";
import { Button } from "../Button";
import { useTheme } from "../../theme";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ButtonState } from "../Button/types.ts";
import { CurrentQuestion, OptionType } from "./types.ts";

interface QuestionProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  currentQuestionItem: CurrentQuestion;
  handleOptionButtonClick: (item: OptionType, index: number) => void;
  activeIndex: number;
  buttonState: ButtonState;
}

export const Question = ({
  menuOpen,
  setMenuOpen,
  currentQuestionItem,
  handleOptionButtonClick,
  activeIndex,
  buttonState,
}: QuestionProps) => {
  const theme = useTheme();
  return (
    <div className={css(questionSectionStyle(theme))}>
      <div className={css(additionalBar)}>
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
  );
};
