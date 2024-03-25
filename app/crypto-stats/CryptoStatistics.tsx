import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Table from "./table";
import {
  blockSummaryData,
  marketSummary,
  minningCost,
  transactionSummer,
} from "../../components/StaticData/cryptoStats";

const CryptoStatictics = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "35px" },
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
        <Box>
          <Grid
            container
            sx={{ justifyContent: "space-between", rowGap: "20px" }}
          >
            <Grid
              item
              xs={12}
              md={5.8}
              sx={{
                padding: "22px 30px",
                background: theme.palette.primary.main,
              }}
            >
              <Typography sx={{ marginBottom: "22px" }}>
                Block Summary
              </Typography>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: "0 15px",
                }}
              >
                <tbody>
                  {blockSummaryData.map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        background: "#F9F9F9",
                        color: "#000",
                      }}
                    >
                      <td style={{ padding: "10px 15px", fontSize: "14px" }}>
                        {item.title}
                      </td>
                      <td style={{ padding: "10px 15px", fontSize: "14px" }}>
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Grid>

            <Grid
              item
              xs={12}
              md={5.8}
              sx={{
                padding: "22px 30px",
                background: theme.palette.primary.main,
              }}
            >
              <Typography sx={{ marginBottom: "22px" }}>
                Market Summary
              </Typography>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: " 0 15px",
                }}
              >
                {marketSummary.map((item, index) => (
                  <Table
                    key={index}
                    title={item.title}
                    price={item.price}
                    view={item.view}
                  />
                ))}
              </table>
            </Grid>
          </Grid>

          <Grid
            sx={{
              margin: "20px 0",
              padding: "22px 30px",
              background: theme.palette.primary.main,
            }}
          >
            <Typography sx={{ marginBottom: "22px" }}>Mining Cost</Typography>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: " 0 15px",
                }}
              >
                {minningCost.map((item) => (
                  <Table
                    key={item.title}
                    title={item.title}
                    price={item.price}
                    view={item.view}
                  />
                ))}
              </table>
            </div>
          </Grid>

          <Grid
            sx={{
              margin: "20px 0",
              padding: "22px 30px",
              background: theme.palette.primary.main,
            }}
          >
            <Typography sx={{ marginBottom: "22px" }}>
              Transaction Summary
            </Typography>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: " 0 15px",
                }}
              >
                {transactionSummer.map((item) => (
                  <Table
                    key={item.title}
                    title={item.title}
                    price={item.price}
                    view={item.view}
                  />
                ))}
              </table>
            </div>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoStatictics;
