"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { links } from "../StaticData/navbarLinks";
import style from "./style";
import { useMediaQuery } from "@mui/material";

type Props = {
  max: boolean;
};

const Sidebar = ({ max }: Props) => {
  const theme = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  if (isMobile) {
    return <></>;
  }

  return (
    <div>
      {max ? (
        <List
          sx={{
            width: "240px",
            height: "100vh",
            position: "fixed",
            overflow: "scroll",
            top: "70px",
            backgroundColor: theme.palette.background.default,
            "::-webkit-scrollbar": {
              display: "none",
            },
            ":hover": {
              "::-webkit-scrollbar": {
                display: "block",
                width: "10px",
              },
              " ::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "5px",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.background.default,
              },
            },
          }}
        >
          {links.map((label) => (
            <>
              <ListItem key={label.id}>
                <Link href={label.path} style={{ width: "100%" }}>
                  {label.subNav ? (
                    <Box>
                      <ListItemText
                        onClick={() => setOpen(!open)}
                        sx={style.listItem}
                      >
                        <Box sx={style.labelWrap}>
                          <Box sx={style.label}>
                            <span> {label.icon}</span>
                            <span>{label.title}</span>
                          </Box>
                          <KeyboardArrowDownIcon />
                        </Box>
                      </ListItemText>
                      {open &&
                        label.subNav.map((item) => (
                          <Link href={item.path} key={item.path}>
                            <ListItemText
                              sx={{
                                marginLeft: "30px",
                                padding: "8px",
                                borderRadius: "10px",
                                backgroundColor:
                                  pathname === item.path
                                    ? theme.palette.primary.main
                                    : "",
                                color: theme.palette.primary.dark,
                              }}
                            >
                              {item.title}
                            </ListItemText>
                          </Link>
                        ))}
                    </Box>
                  ) : (
                    <ListItemText
                      sx={{
                        padding: "8px",
                        borderRadius: "10px",
                        backgroundColor:
                          pathname === label.path
                            ? theme.palette.primary.main
                            : "",
                        color: theme.palette.primary.dark,
                        ":hover": {
                          background: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box sx={style.label}>
                        <span> {label.icon}</span>
                        <span>{label.title}</span>
                      </Box>
                    </ListItemText>
                  )}
                </Link>
              </ListItem>
            </>
          ))}
        </List>
      ) : (
        <List
          sx={{
            width: "150px",
            height: "100vh",
            position: "fixed",
            overflow: "scroll",
            top: "70px",
            backgroundColor: theme.palette.background.default,
            "::-webkit-scrollbar": {
              display: "none",
            },
            ":hover": {
              "::-webkit-scrollbar": {
                display: "block",
                width: "10px",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.background.default,
              },
              " ::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "5px",
              },
            },
          }}
        >
          {links.map((label) => (
            <ListItem key={label.id}>
              <Link href={label.path} style={{ width: "100%" }}>
                {label.subNav ? (
                  <>
                    <ListItemText
                      onClick={() => setOpen(!open)}
                      sx={{
                        padding: "8px",
                        borderRadius: "10px",
                        textAlign: "center",
                        backgroundColor:
                          pathname === label.path
                            ? theme.palette.primary.main
                            : "",
                        color: theme.palette.primary.dark,
                        ":hover": {
                          background: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box sx={style.minWrap}>
                        <span>{label.icon}</span>
                        <span style={{ fontSize: "14px" }}>{label.title}</span>
                      </Box>
                    </ListItemText>
                    {open &&
                      label.subNav.map((item) => (
                        <Link href={item.path} key={item.path}>
                          <ListItemText
                            sx={{
                              padding: "8px",
                              borderRadius: "10px",
                              textAlign: "center",
                              backgroundColor:
                                pathname === item.path
                                  ? theme.palette.primary.main
                                  : "",
                              color: theme.palette.primary.dark,
                              ":hover": {
                                background: theme.palette.primary.main,
                              },
                            }}
                          >
                            {item.title}
                          </ListItemText>
                        </Link>
                      ))}
                  </>
                ) : (
                  <ListItemText
                    sx={{
                      padding: "8px",
                      borderRadius: "10px",
                      textAlign: "center",
                      backgroundColor:
                        pathname === label.path
                          ? theme.palette.primary.main
                          : "",
                      color: theme.palette.primary.dark,
                      ":hover": {
                        background: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Box sx={style.minWrap}>
                      <span>{label.icon}</span>
                      <span style={{ fontSize: "14px" }}>{label.title}</span>
                    </Box>
                  </ListItemText>
                )}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Sidebar;
