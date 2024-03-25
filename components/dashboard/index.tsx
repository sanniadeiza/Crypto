"use client";
import Box from "@mui/material/Box";
import Analytics from "./Analytics";
import Overview from "./Overview";
import YourPortfolio from "./YourPortfolio";
import Exchange from "./Exchange";
import QuickTransfer from "./QuickTransfer";
import Earning from "./Earning";

const Dashboard = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "35px" },
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
        <Analytics />
        <Overview />
        <YourPortfolio />
        <Exchange />
        <QuickTransfer />
        <Earning />
      </Box>
    </Box>
  );
};

export default Dashboard;
