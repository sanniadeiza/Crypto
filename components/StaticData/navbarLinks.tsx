import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FormatShapesOutlinedIcon from "@mui/icons-material/FormatShapesOutlined";

export const links = [
  { id: 1, icon: <GridViewOutlinedIcon />, title: "Dashboard", path: "/" },
  {
    id: 2,
    icon: <EventOutlinedIcon />,
    title: "Crypto Wallet",
    path: "/crypto-wallet",
  },
  {
    id: 3,
    icon: <SignalCellularAltOutlinedIcon />,
    title: "Crypto Stats",
    path: "/crypto-stats",
  },
  {
    id: 4,
    icon: <FormatShapesOutlinedIcon />,
    title: "App",
    path: "",
    subNav: [
      { title: "Draggable Card", path: "/draggable-card" },
      { title: "Invoice", path: "/invoice" },
      { title: "Calendar", path: "/calendar" },
    ],
  },
  {
    id: 5,
    icon: <ShoppingCartOutlinedIcon />,
    title: "Buy & Sell",
    path: "#",
  },
  { id: 6, icon: <LoopOutlinedIcon />, title: "Transactions", path: "#" },
  { id: 7, icon: <TimelineOutlinedIcon />, title: "Tickers", path: "#" },
  { id: 8, icon: <DonutLargeOutlinedIcon />, title: "Pages", path: "#" },
  { id: 9, icon: <EmailOutlinedIcon />, title: "Mail Box", path: "#" },
  { id: 10, icon: <TipsAndUpdatesOutlinedIcon />, title: "Icons", path: "#" },
  {
    id: 11,
    icon: <BackupTableOutlinedIcon />,
    title: "UI Elements",
    path: "#",
  },
  { id: 12, icon: <ListAltOutlinedIcon />, title: "Forms", path: "#" },
  { id: 13, icon: <WidgetsOutlinedIcon />, title: "Widgets", path: "#" },
  { id: 14, icon: <TableChartOutlinedIcon />, title: "Table", path: "#" },
  { id: 15, icon: <AutoGraphOutlinedIcon />, title: "Charts", path: "#" },
  { id: 16, icon: <PublicOutlinedIcon />, title: "Maps", path: "#" },
];
