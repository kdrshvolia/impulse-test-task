import { ReactNode, useMemo, useState } from "react";
import { defaultContextValue, GameContext } from "./gameContext";

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  const [currentScore, setCurrentScore] = useState(
    defaultContextValue.currentScore
  );

  const gameContextValue = useMemo(
    () => ({ currentScore, setCurrentScore }),
    [currentScore]
  );
  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
};
