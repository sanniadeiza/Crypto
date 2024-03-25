import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const style = {
  analyticWrap: {
    padding: { xs: "22px 30px", md: "22px 15px", lg: "22px 30px" },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  anaylics: {
    "@media (min-width:767px)": {
      display: "flex",
      alignItems: "center",
      columnGap: { md: "10px", lg: "25px" },
    },
  },
  anayliticCTA: {
    fontFamily: "Merriweather Sans",
    textTransform: "capitalize",
    fontSize: "14px",
    padding: "5px 0",
    display: "flex",
    justifyContent: " flex-start",
  },
  ctaWrap: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    rowGap: "5px",
    "@media (min-width:767px)": {
      columnGap: "5px",
    },
  },
  totalIncomeWrap: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    padding: "40px 30px",
  },
  totalIncome: {
    display: "flex",
    columnGap: "5px",
    alignItems: "center",
  },
  overviewWrap: {
    "@media (min-width:767px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  gridWrap: {
    "@media (min-width:767px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  styledSeperation: {
    display: "flex",
    columnGap: "8px",
  },
  wrap: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "22px",
    alignItems: "center",
  },
  total: {
    marginBottom: "25px",
    fontSize: "11px",
    textAlign: "center",
  },
  iconWrap: {
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
  },
  btnWrap: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#EDEDF3",
    justifyContent: "center",
    padding: "5px 10px",
  },
  titleWrap: {
    backgroundColor: "#EDEDF3",
    color: "#000",
    borderRadius: "0",
    fontFamily: "Merriweather Sans",
    fontSize: "14px",
    marginRight: "5px",
    ":hover": {
      backgroundColor: "#0000",
    },
  },
  outlinedInput: {
    "& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "0",
      width: "138px",
      color: "#000",
      outline: "1px solid #EDEDF3",
      border: "1px solid #EDEDF3",
    },
  },
  menuWrap: {
    "& .MuiList-root": {
      background: "#EDEDF3",
      color: "#000",
    },
  },
  menuItem: {
    fontSize: "14px",
    textTransform: "uppercase",
  },
  exchangeWrap: {
    display: "flex",
    marginBottom: "15px",
    justifyContent: "space-between",
  },
  exchangeNow: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "30px",
    padding: "11px 25px",
    fontFamily: "Merriweather Sans",
    fontSize: "14px",
    textTransform: "capitalize",
    ":hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
  colArrow: {
    fontSize: "20px",
    color: "#fff",
  },
  contactWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  imgWrap: {
    textAlign: "center",
    paddingBottom: "50px",
  },
  marketDataWrap: {
    display: "flex",
    flexDirection: { xs: "column", md: "row", lg: "column" },
    flexWrap: "wrap",
    columnGap: "15px",
  },
  marketImgWrap: {
    maxWidth: "270px",
    height: "220px",
    margin: "20px 0",
    position: "relative",
  },
};

export const StyledBox = styled(Box)(({ theme }) => ({
  "& > *:nth-of-type(-n+2)": {
    background: "#0d6efd",
    color: "#fff",
    border: "1px solid #0d6efd",
  },
}));

export default style;
