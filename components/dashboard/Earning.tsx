import Image from "next/image";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import style from "./style";
import {
  rowsEarning,
  exchangeData,
  marketNewsData,
} from "../StaticData/analytics";

const ctaData = ["Month", "Week"];

const columns: GridColDef[] = [
  { field: "no", width: 50, headerName: "NO" },
  {
    field: "currency",
    align: "center",
    headerName: "Currency",
    renderCell: ({ row: { currency } }) => {
      return (
        <Box>
          {currency === "orange" ? (
            <Image
              src="	https://demo.dashboardpack.com/cryptocurrency-html/img/currency/1.svg"
              alt="Bitcoin"
              width={31}
              height={31}
            />
          ) : currency === "green" ? (
            <Image
              src="https://demo.dashboardpack.com/cryptocurrency-html/img/currency/2.svg"
              alt="Bitcoin"
              width={31}
              height={31}
            />
          ) : currency === "blue" ? (
            <Image
              src="	https://demo.dashboardpack.com/cryptocurrency-html/img/currency/3.svg"
              alt="Bitcoin"
              width={31}
              height={31}
            />
          ) : (
            <Image
              src="	https://demo.dashboardpack.com/cryptocurrency-html/img/currency/4.svg"
              alt="Bitcoin"
              width={31}
              height={31}
            />
          )}
        </Box>
      );
    },
  },
  { field: "platform", headerName: "Platform", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "id2", headerName: "ID", width: 130 },
  { field: "amount", headerName: "Amount" },
  {
    field: "status",
    headerName: "Status",
    renderCell: ({ row: { status } }) => {
      return (
        <Box
          sx={{
            padding: "4px 7px",
            textAlign: "center",
            borderRadius: "5px",
            color: status === "Pending" ? "#1598FF" : "#2BD27F",
            background: status === "Pending" ? "#E5F2FF" : "#E7FBF0",
          }}
        >
          {status}
        </Box>
      );
    },
  },
];

const Earning = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent="space-between" rowGap="43px">
      <Grid
        item
        container
        xs={12}
        lg={8.1}
        rowGap="43px"
        justifyContent="space-between"
      >
        <Box
          sx={{
            padding: "22px 30px",
            width: "100%",
            background: theme.palette.primary.main,
          }}
        >
          <Box sx={style.wrap}>
            <Typography>Earning</Typography>
            <Box>
              {ctaData.map((item) => (
                <Button
                  key={item}
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
                  {item}
                </Button>
              ))}
            </Box>
          </Box>

          <div>
            <DataGrid rows={rowsEarning} columns={columns} hideFooter />
          </div>
        </Box>

        <Grid
          item
          xs={12}
          xl={5.8}
          sx={{ background: theme.palette.primary.main, padding: "22px 30px" }}
        >
          <Box sx={style.wrap}>
            <Typography>Exchange</Typography>
            <MoreHorizIcon />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "25px" }}
          >
            {exchangeData.map((item) => (
              <Box
                key={item.time}
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: "15px",
                    height: "15px",
                    background: item.isActive
                      ? theme.palette.secondary.light
                      : "",
                    border: item.isActive
                      ? ""
                      : `1px solid ${theme.palette.secondary.light}`,
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                ></Box>
                <Box>
                  <Typography variant="h6" fontWeight="800">
                    {item.time}
                  </Typography>
                  <Typography variant="h6">{item.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          xl={5.8}
          sx={{ background: theme.palette.primary.main, padding: "22px 30px" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={5} />
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        lg={3.5}
        sx={{ background: theme.palette.primary.main, padding: "22px 30px" }}
      >
        <Typography>Market News</Typography>
        <Box sx={{ maxHeight: "880px", overflowX: "auto" }}>
          <Box sx={style.marketDataWrap}>
            {marketNewsData.map((item, index) => (
              <Box key={index} sx={{ maxWidth: "275px" }}>
                <Box sx={style.marketImgWrap}>
                  <Image src={item.image} fill alt="image" />
                </Box>

                <Typography>{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Earning;
