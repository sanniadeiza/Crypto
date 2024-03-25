import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { yourPlatform, yourPlatformData, group } from "../StaticData/analytics";
import style, { StyledBox } from "./style";

const YourPortfolio = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Grid container rowGap="30px" justifyContent="space-between">
      <Grid
        item
        xs={12}
        lg={7.8}
        sx={{
          padding: { xs: "22px 30px", lg: "22px 15px", xl: "22px 30px" },
          background: theme.palette.primary.main,
        }}
      >
        <Box sx={style.gridWrap}>
          <Box sx={{ marginBottom: { xs: "15px", md: "0" } }}>
            <Typography variant="h4">254856 USD </Typography>
            <Typography variant="h6">125648 USD (20%)</Typography>
          </Box>
          <StyledBox sx={style.styledSeperation}>
            {group.map((item) => (
              <Typography
                key={item}
                variant="h6"
                sx={{
                  padding: "7px 13px",
                  width: "fit-content",
                  borderRadius: "5px",
                  border: `1px solid ${theme.palette.primary.dark}`,
                }}
              >
                {item}
              </Typography>
            ))}
          </StyledBox>
        </Box>

        <Box sx={{ width: "100%", height: 370 }}>
          <ResponsiveContainer>
            <AreaChart
              data={yourPlatformData}
              margin={{
                top: 10,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#0d6efd"
                fill="#63C5DA"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        lg={3.8}
        sx={{
          padding: { xs: "22px 30px", lg: "22px 15px", xl: "22px 30px" },
          background: theme.palette.primary.main,
        }}
      >
        <Box sx={style.wrap}>
          <Typography>Your Portfolio</Typography>
          <MoreHorizIcon />
        </Box>
        <Typography textAlign="center" variant="h3">
          $63411.00
        </Typography>
        <Typography sx={style.total}>Total Balance</Typography>

        {yourPlatform.map((item, index) => {
          const { icon, title, figure, rate } = item;
          return (
            <Box
              key={title}
              sx={{
                padding: "17px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:
                  index === yourPlatform.length - 1
                    ? ""
                    : `1px solid ${theme.palette.primary.dark}`,
              }}
            >
              <Box sx={style.iconWrap}>
                <Image src={icon} width={40} height={40} alt={title} />
                <Typography variant="h6">{title}</Typography>
              </Box>
              <Box>
                <Typography variant="h6">{figure}</Typography>
                <Typography variant="h6">{rate}</Typography>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default YourPortfolio;
