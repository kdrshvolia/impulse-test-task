import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Global } from "@emotion/react";
import { StartPage } from "./pages/start-page/startPage.tsx";
import { Board } from "./components/Board";
import { ThemeProvider } from "./theme";
import { ROUTES } from "./constants/routes.ts";
import { Result } from "./pages/result/result.tsx";

const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,
    element: <StartPage />,
  },
  {
    path: ROUTES.gameBoard,
    element: <Board />,
  },

  {
    path: ROUTES.resultPage,
    element: <Result />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Global
        styles={{
          "*": {
            padding: 0,
            margin: 0,
            boxSizing: "border-box",
          },
          ":root": { fontFamily: "'Inter', sans-serif", height: "100%" },
          body: {
            height: "100vh",
          },
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
