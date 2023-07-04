import { ReactNode, useState } from "react";
import { defaultContextValue, GameContext } from "./gameContext";

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  const [currentScore, setCurrentScore] = useState(
    defaultContextValue.currentScore
  );
  return (
    <GameContext.Provider value={{ currentScore, setCurrentScore }}>
      {children}
    </GameContext.Provider>
  );
};
