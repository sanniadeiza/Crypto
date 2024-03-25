"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme, useMediaQuery } from "@mui/material";
import { ColorModeContext } from "@/theme";
import { links } from "../StaticData/navbarLinks";
import style from "./style";

const Navbar = ({ setMax }: any) => {
  const theme = useTheme();
  const pathname = usePathname();
  const colorMode = useContext(ColorModeContext);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        sx={style.toolbar}
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              setOpenDrawer(!openDrawer);
              if (isDesktop) {
                setMax((prev: boolean) => (prev = !prev));
              }
            }}
          >
            <MenuIcon
              sx={{ fontSize: "30px", color: theme.palette.primary.dark }}
            />
          </IconButton>

          <Typography variant="h3" sx={{ marginLeft: "10px" }}>
            DpCrypto
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <WbSunnyIcon sx={{ color: theme.palette.primary.dark }} />
            ) : (
              <DarkModeIcon sx={{ color: theme.palette.primary.dark }} />
            )}
          </IconButton>
          <Box>
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="User profile" src="/images/woman.png" />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{ padding: "0 20px" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LogoutIcon />
                  <Typography sx={{ textAlign: "center", marginLeft: "10px" }}>
                    Logout
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>

      {isMobile && (
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <AppBar position="sticky">
            <Toolbar
              sx={style.toolbarMobile}
              style={{ backgroundColor: theme.palette.background.default }}
            >
              <Box sx={style.iconWrap}>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                  <MenuIcon sx={{ fontSize: "30px" }} />
                </IconButton>

                <Typography variant="h3" sx={{ marginLeft: "10px" }}>
                  DpCrypto
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>

          <List
            sx={{
              width: "240px",
              overflow: "auto",
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
                "::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "5px",
                },
              },
              backgroundColor: theme.palette.background.default,
            }}
          >
            {links.map((label) => (
              <ListItem key={label.title} onClick={() => setOpenDrawer(false)}>
                <Link href={label.path} style={{ width: "100%" }}>
                  {label.subNav ? (
                    <Box>
                      <ListItemText
                        onClick={() => setOpen(!open)}
                        sx={{
                          padding: "8px",
                          borderRadius: "10px",
                          backgroundColor:
                            pathname === label.path
                              ? theme.palette.primary.main
                              : "",
                          ":hover": {
                            background: theme.palette.primary.main,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: "10px",
                          }}
                        >
                          <span> {label.icon}</span>
                          <span>{label.title}</span>
                        </Box>
                      </ListItemText>
                      {open &&
                        label.subNav.map((item) => (
                          <Link href={item.path} key={item.path}>
                            <ListItemText
                              sx={{
                                padding: "8px",
                                borderRadius: "10px",
                                backgroundColor:
                                  pathname === label.path
                                    ? theme.palette.primary.main
                                    : "",
                                ":hover": {
                                  background: theme.palette.primary.main,
                                },
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
                        ":hover": {
                          background: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: "10px",
                        }}
                      >
                        <span> {label.icon}</span>
                        <span>{label.title}</span>
                      </Box>
                    </ListItemText>
                  )}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </AppBar>
  );
};

export default Navbar;
