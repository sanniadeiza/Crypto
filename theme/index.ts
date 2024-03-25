import typography from "./typography";
import colors from "./color";
import breakpoints from "./breakPoints";
import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeOptions } from "@mui/material";

interface IThemeOptions extends ThemeOptions {
  palette: any;
  breakpoints: any;
  typography: any;
}

export const themeSettings = (mode: string) => {
  const colorTheme = colors(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colorTheme.blueAccent[200],
              dark: colorTheme.blueAccent[600],
              light: colorTheme.blueAccent[700],
            },
            secondary: {
              main: colorTheme.greenAccent[500],
              light: colorTheme.blueAccent[800],
            },
            neutral: {
              dark: colorTheme.redAccent[400],
              main: colorTheme.blueAccent[300],
              light: colorTheme.blueAccent[200],
            },
            background: {
              default: colorTheme.blueAccent[500],
            },
          }
        : {
            primary: {
              main: colorTheme.blueAccent[400],
              dark: colorTheme.blueAccent[600],
              light: colorTheme.blueAccent[700],
            },
            secondary: {
              main: colorTheme.greenAccent[500],
              light: colorTheme.blueAccent[800],
            },
            neutral: {
              dark: colorTheme.redAccent[400],
              main: colorTheme.blueAccent[300],
              light: colorTheme.blueAccent[200],
            },
            background: {
              default: colorTheme.blueAccent[100],
            },
          }),
    },
    typography: { ...typography },
    breakpoints: { ...breakpoints },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): any => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(themeSettings(mode) as IThemeOptions),
    [mode]
  );

  return [theme, colorMode];
};
