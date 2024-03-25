import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import style from "./style";
import { quickTransfer, quickTransferData } from "../StaticData/analytics";

const QuickTransfer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: "43px" }}>
      <Grid container rowGap="30px" justifyContent="space-between">
        <Grid
          item
          xs={12}
          lg={3.8}
          sx={{ padding: "22px 30px", background: theme.palette.primary.main }}
        >
          <Box sx={style.wrap}>
            <Typography>Quick Transfer</Typography>
            <MoreHorizIcon />
          </Box>
          <Box sx={style.contactWrap}>
            <Typography variant="h6">Recent Contact</Typography>
            <Typography variant="h6">View More</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              borderBottom: `1px solid ${theme.palette.primary.dark}`,
            }}
          >
            {quickTransfer.map((item, index) => {
              const { image, name, others } = item;
              return (
                <Box sx={style.imgWrap} key={index}>
                  <Image src={image} alt={name} width={69} height={72} />
                  <Typography variant="h6">{name}</Typography>
                  <Typography sx={{ fontSize: "11px" }}>{others}</Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              padding: "20px 0",
              marginBottom: "30px",
              borderBottom: `1px solid ${theme.palette.primary.dark}`,
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Amount ETH</Typography>
            <Typography variant="h2">8,124.52</Typography>
          </Box>

          <Button variant="contained" fullWidth sx={style.exchangeNow}>
            Send Money
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          lg={7.8}
          sx={{ padding: "22px 30px", background: theme.palette.primary.main }}
        >
          <Box sx={style.wrap}>
            <Typography>Revenue Statistics</Typography>
            <MoreHorizIcon />
          </Box>

          <Box sx={{ width: "100%", height: 380 }}>
            <ResponsiveContainer>
              <BarChart
                width={470}
                height={400}
                data={quickTransferData}
                margin={{
                  top: 20,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                <Bar dataKey="av" stackId="a" fill="#000" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuickTransfer;
