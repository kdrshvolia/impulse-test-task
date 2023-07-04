import { createContext, Dispatch, SetStateAction } from "react";

interface GameContextProps {
  currentScore: number;
  setCurrentScore: Dispatch<SetStateAction<number>>;
}

export const defaultContextValue: GameContextProps = {
  currentScore: 0,
  setCurrentScore: () => null,
};

export const GameContext = createContext(defaultContextValue);
