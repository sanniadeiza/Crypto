"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import style from "./style";
import { totalIncomeSection, cta, menuItems } from "../StaticData/analytics";

const Analytics = (): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  type IncomeSection = {
    [key: string]: string;
  };

  return (
    <Box>
      <Box
        sx={style.analyticWrap}
        style={{ background: theme.palette.primary.main }}
      >
        <Box sx={style.anaylics}>
          <Typography variant="h6">Analytics</Typography>
          <Typography variant="h6">Cryptocurrency</Typography>
          <Typography variant="h6">Campaign</Typography>
          <Button
            variant="text"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={style.anayliticCTA}
            style={{ color: theme.palette.primary.dark }}
          >
            More
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .MuiList-root": {
                background: theme.palette.primary.main,
              },
            }}
          >
            {menuItems.map((item: string) => (
              <MenuItem
                key={item}
                onClick={handleClose}
                sx={{ fontSize: "14px" }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={style.ctaWrap}>
          {cta.map((item: string) => (
            <Button
              key={item}
              variant="outlined"
              sx={{
                borderColor: theme.palette.primary.dark,
                color: theme.palette.primary.dark,
                borderRadius: "0",
                ":hover": {
                  borderColor: theme.palette.primary.dark,
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>

      <Box sx={style.totalIncomeWrap}>
        <Grid container rowGap="80px">
          {totalIncomeSection.map((item: IncomeSection) => {
            const { title, figure, income, time } = item;
            return (
              <Grid item xs={12} md={6} lg={3} key={title}>
                <Typography variant="h6" mb="15px">
                  {title}
                </Typography>
                <Typography variant="h2" mb="15px">
                  {figure}
                </Typography>
                <Box sx={style.totalIncome}>
                  <Box sx={style.totalIncome}>
                    <Typography variant="h6">{income}</Typography>
                    <ArrowDropUpIcon />
                  </Box>
                  <Typography variant="h6">{time}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Analytics;
