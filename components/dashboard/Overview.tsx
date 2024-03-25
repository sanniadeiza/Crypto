"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import style from "./style";
import { overviewItems } from "../StaticData/analytics";

const Overview = (): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: "25px 0" }}>
      <Box sx={style.overviewWrap}>
        <Box sx={{ paddingBottom: "15px" }}>
          <Typography variant="h3" sx={{ paddingBottom: "15px" }}>
            Overview
          </Typography>
          <Typography variant="h6">
            Statistics, Predictive Analytics Data Visualization, Big Data
            Analytics, etc.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              borderColor: theme.palette.primary.dark,
              color: theme.palette.primary.dark,
              borderRadius: "0",
              fontFamily: "Merriweather Sans",
              fontSize: "14px",
              marginRight: "5px",
              ":hover": {
                borderColor: theme.palette.primary.dark,
              },
            }}
          >
            31 May 2023
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.primary.dark,
              color: theme.palette.primary.dark,
              borderRadius: "0",
              fontFamily: "Merriweather Sans",
              fontSize: "14px",
              textTransform: "capitalize",
              ":hover": {
                borderColor: theme.palette.primary.dark,
              },
            }}
          >
            Export
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
            {overviewItems.map((item: string) => (
              <MenuItem
                key={item}
                onClick={handleClose}
                sx={{
                  fontSize: "14px",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
