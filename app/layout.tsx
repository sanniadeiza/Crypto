"use client";
import { useState } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery, Box } from "@mui/material";
import "./globals.css";
import { merriweatherSans } from "@/font";
import { ColorModeContext, useMode } from "@/theme";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();
  const [max, setMax] = useState<boolean>(true);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <html lang="en">
      <head>
        <title>DP Crypto</title>
      </head>

      <body
        className={merriweatherSans.className}
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ width: "100%", height: "100%" }}>
              <Navbar max={max} setMax={setMax} />
              <main
                style={{
                  display: "flex",
                }}
              >
                <Sidebar max={max} />
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    top: "70px",
                    marginLeft: max ? "240px" : "150px",
                    color: theme.palette.primary.dark,
                    "@media (max-width: 991px)": {
                      marginLeft: "0",
                    },
                  }}
                >
                  {children}
                </Box>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
