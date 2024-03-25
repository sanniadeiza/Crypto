"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { walletCryptoData } from "@/components/StaticData/cryptoWallets";

const columns: GridColDef[] = [
  {
    field: "text",
    headerName: "Crypto Trade",
    renderCell: ({ row: { text } }) => {
      return (
        <Box sx={{ display: "flex" }}>
          <Image
            src="https://demo.dashboardpack.com/cryptocurrency-html/img/currency/1.svg"
            alt="Bitcoin"
            width={31}
            height={31}
            style={{ marginRight: "15px" }}
          />
          <Typography>{text}</Typography>
        </Box>
      );
    },
    width: 125,
    minWidth: 160,
  },
  {
    field: "senderId",
    headerName: "Sender ID",
    width: 140,
    minWidth: 180,
  },
  {
    field: "transactionId",
    headerName: "Transaction ID",
    width: 160,
    minWidth: 220,
  },
  {
    field: "time",
    headerName: "Time",
    width: 100,
    minWidth: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    minWidth: 170,
    renderCell: ({ row: { status } }) => {
      return (
        <Box
          sx={{
            padding: "8px 15px",
            borderRadius: "5px",
            color: "#1598FF",
            background: "#E5F2FF",
          }}
        >
          {status}
        </Box>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 90,
    minWidth: 150,
  },
];

const CryptoTable = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: { xs: "20px", md: "35px" } }}>
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "22px 30px",
          background: theme.palette.primary.main,
        }}
      >
        <Typography sx={{ marginBottom: "22px" }} variant="h3">
          Crypto Wallets
        </Typography>
        <Box>
          <DataGrid
            rows={walletCryptoData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoTable;
