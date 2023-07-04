import { Button } from "../Button";
import { css } from "../../css";
import { levelContainerStyle } from "./style.ts";
import { useTheme } from "../../theme";

interface LevelProps {
  options: string[];
  currentIndex: number;
  isOpen: boolean;
}

export const Level = ({ options, currentIndex, isOpen }: LevelProps) => {
  const theme = useTheme();

  const getCurrentState = (index: number, i: number) => {
    if (i < index) return "inactive";

    if (i === index) return "hover";

    return "active";
  };

  return (
    <div className={css(levelContainerStyle(theme, isOpen))}>
      {[...options].map((option, i) => (
        <Button
          state={getCurrentState(currentIndex, i)}
          changeState
          interactive={false}
        >{`$ ${Number(option).toLocaleString()}`}</Button>
      ))}
    </div>
  );
};
