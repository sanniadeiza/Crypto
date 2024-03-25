import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Fade from "@mui/material/Fade";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import style from "./style";
import { exchange, rowsExchange } from "../StaticData/analytics";

const columns: GridColDef[] = [
  {
    field: "col1",
    width: 50,
    renderCell: ({ row: { col1 } }) => {
      return (
        <Box
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: col1 === "arrow_up" ? "#FF788E" : "#77C454",
          }}
        >
          {col1 === "arrow_up" ? (
            <NorthIcon sx={style.colArrow} />
          ) : (
            <SouthIcon sx={style.colArrow} />
          )}
        </Box>
      );
    },
  },
  {
    field: "col2",
    width: 70,
    renderCell: ({ row: { col2 } }) => {
      return (
        <Box
          sx={{
            padding: "4px 7px",
            textAlign: "center",
            borderRadius: "5px",
            color: "#fff",
            backgroundColor: col2 === "sold" ? "#FD517D" : "#80CF00",
          }}
        >
          {col2 === "sold" ? "Sold" : "Buy"}
        </Box>
      );
    },
  },
  { field: "col3", width: 90 },
  { field: "col4", width: 185 },
  { field: "col5", width: 185 },
  { field: "col6", width: 185 },
];

const Exchange = (): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsDisplayArrowUp(!isDisplayArrowUp);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isDisplayArrowUp, setIsDisplayArrowUp] = useState(false);
  const [inputValue, setInputValue] = useState("125.00 USD");

  return (
    <Box sx={{ margin: "43px 0" }}>
      <Grid container rowGap="30px" justifyContent="space-between">
        <Grid
          item
          xs={12}
          lg={3.8}
          sx={{ padding: "22px 30px", background: theme.palette.primary.main }}
        >
          <Box sx={style.wrap}>
            <Typography>Exchange</Typography>
            <MoreHorizIcon />
          </Box>

          {exchange.map((item) => {
            const { title, subTitle, menuTitle, menuTitle2 } = item;
            return (
              <Box sx={{ marginBottom: "15px" }} key={title}>
                <Typography variant="h6" marginBottom="10px">
                  {title}
                </Typography>

                <Box sx={style.btnWrap}>
                  <Button
                    variant="text"
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    endIcon={
                      isDisplayArrowUp ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )
                    }
                    sx={style.titleWrap}
                  >
                    {subTitle}
                  </Button>

                  <OutlinedInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    sx={style.outlinedInput}
                  />
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={style.menuWrap}
                  >
                    <MenuItem>
                      <OutlinedInput
                        placeholder="Search..."
                        value=""
                        sx={{ color: "#000" }}
                      />
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={style.menuItem}>
                      {menuTitle}
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={style.menuItem}>
                      {menuTitle2}
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            );
          })}

          <Box sx={{ marginBottom: "15px" }}>
            <Typography variant="h6" marginBottom="10px">
              Enter you amount
            </Typography>

            <Box sx={style.btnWrap}>
              <Button variant="text" sx={style.titleWrap}>
                0.0214 BTC
              </Button>

              <OutlinedInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={style.outlinedInput}
              />
            </Box>
          </Box>

          <Box sx={style.exchangeWrap}>
            <Typography variant="h6">Monthly Limit</Typography>
            <Typography variant="h6">$49750 remaining</Typography>
          </Box>

          <Button variant="contained" fullWidth sx={style.exchangeNow}>
            Exchange Now
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          lg={7.8}
          sx={{ padding: "22px 30px", background: theme.palette.primary.main }}
        >
          <Box sx={style.wrap}>
            <Typography>Recent Activities</Typography>
            <Typography>View all</Typography>
          </Box>
          <Box>
            <DataGrid
              rows={rowsExchange}
              columns={columns}
              hideFooter
              columnHeaderHeight={0}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Exchange;
