"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Address from "./Address";
import { invoiceData } from "@/components/StaticData/invoiceData";
import style from "./style";

const Invoice = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box sx={style.wrapper}>
      <Box
        sx={{ background: theme.palette.primary.main, padding: "22px 30px" }}
      >
        <Box sx={style.invoiceWrap}>
          <Typography variant="h3">Invoice</Typography>
          <Typography>Print</Typography>
        </Box>

        <Box
          sx={{
            border: `1px solid ${theme.palette.primary.dark}`,
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 16px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography variant="h6">
            Invoice <strong>12/06/2023</strong>
          </Typography>
          <Typography variant="h6">
            Status <strong>Pending</strong>
          </Typography>
        </Box>

        <Box
          sx={{
            borderRight: `1px solid ${theme.palette.primary.dark}`,
            borderLeft: `1px solid ${theme.palette.primary.dark}`,
            borderBottom: `1px solid ${theme.palette.primary.dark}`,
            padding: "16px",
          }}
        >
          <Box
            sx={{ display: { md: "flex", justifyContent: "space-between" } }}
          >
            <Address title="From" />
            <Address title="To" />
          </Box>

          <Box sx={{ marginTop: "40px" }}>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: "0 15px",
                }}
              >
                <thead>
                  <tr style={{ background: "#dddddd", color: "#000" }}>
                    <th>
                      <Typography variant="h5" sx={style.text}>
                        #
                      </Typography>
                    </th>
                    <th>
                      <Typography variant="h5" sx={style.text}>
                        Item
                      </Typography>
                    </th>
                    <th>
                      <Typography variant="h5" sx={style.text}>
                        Description
                      </Typography>
                    </th>
                    <th>
                      <Typography variant="h5" sx={style.text}>
                        Unit Cost
                      </Typography>
                    </th>
                    <th>
                      <Typography variant="h5" sx={style.text}>
                        Qty
                      </Typography>
                    </th>
                    <th>
                      <Typography variant="h5" sx={style.text}>
                        Total
                      </Typography>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {invoiceData.map((item, index) => (
                    <tr
                      style={{ background: "#dddddd", color: "#000" }}
                      key={index}
                    >
                      <td>
                        <Typography variant="h6" sx={style.text}>
                          {item.id}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="h6" sx={style.text}>
                          {item.item}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="h6" sx={style.text}>
                          {item.desc}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="h6" sx={style.text}>
                          {item.unit}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="h6" sx={style.text}>
                          {item.qty}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="h6" sx={style.text}>
                          {item.total}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Box>

          <Grid container sx={{ justifyContent: "flex-end" }}>
            <Grid item xs={12} md={4}>
              <table
                style={{
                  borderCollapse: "separate",
                  borderSpacing: " 0 15px",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr
                    style={{
                      background: "#F0F0F0",
                      color: "#000",
                    }}
                  >
                    <td>
                      <Typography variant="h6" sx={style.text}>
                        Subtotal
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="h6" sx={style.text}>
                        $8.497,00
                      </Typography>
                    </td>
                  </tr>
                  <tr
                    style={{
                      background: "#F0F0F0",
                      color: "#000",
                    }}
                  >
                    <td>
                      <Typography sx={style.text}>Discount (20%)</Typography>
                    </td>
                    <td>
                      <Typography variant="h6" sx={style.text}>
                        $1,699,40
                      </Typography>
                    </td>
                  </tr>
                  <tr
                    style={{
                      background: "#F0F0F0",
                      color: "#000",
                    }}
                  >
                    <td>
                      <Typography variant="h6" sx={style.text}>
                        VAT (10%)
                      </Typography>
                    </td>
                    <td>
                      <Typography sx={style.text}> $679,76</Typography>
                    </td>
                  </tr>
                  <tr
                    style={{
                      background: "#F0F0F0",
                      color: "#000",
                    }}
                  >
                    <td>
                      <Typography variant="h6" sx={style.text}>
                        Total
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="h6" sx={style.text}>
                        $7.477,36
                      </Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Invoice;
