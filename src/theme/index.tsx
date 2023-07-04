import { createContext, useContext } from "react";

import facepaint from "facepaint";

const BREAKPOINTS = [768, 1024, 1612];

export const mq = facepaint(BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`));

const colors = {
  white: "#FFF",
  black40: "#D0D0D8",
  black5: "#F5F5F7",
  black100: "#1C1C21",
  orange120: "#E87928",
  orange100: "#FF8B37",
  orange80: "#FFAC70",
  orange5: "#FFF3EB",
  green100: "#47D867",
  green5: "#E6FAEA",
  red100: "#EC6259",
  red5: "#FDEEED",
};

const defaultTheme = {
  colors,
} as const;

export type ThemeType = typeof defaultTheme;

const PatternThemeContext = createContext<ThemeType>(defaultTheme);

export const useTheme = () => useContext(PatternThemeContext);

interface ThemeProviderArgs {
  children: React.ReactNode;
  theme?: ThemeType;
}

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderArgs) => (
  <PatternThemeContext.Provider value={theme}>
    {children}
  </PatternThemeContext.Provider>
);
