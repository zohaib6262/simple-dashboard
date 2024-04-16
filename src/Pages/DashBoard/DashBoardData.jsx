import { Key } from "react-bootstrap-icons";
import {
  TendingUp,
  TendingDown,
  MonthlyListings,
  MonthlyOrders,
  PendingDeliveries,
  TotalUsers,
  TotalVisitors,
} from "./DahBoardIcons";

export const DashBoardData = [
  {
    Key: "1",
    title: "Total Users",
    value: "40,689",
    icon: <TotalUsers />,
    upDown: <TendingUp />,
    change: `8.5% `,
    para: "Up from yesterday",
    changeType: "increase",
  },
  {
    title: "Monthly Orders",
    value: "10293",
    icon: <MonthlyOrders />,
    upDown: <TendingUp />,
    change: `1.3% `,
    para: "Up from past week",
    changeType: "increase",
  },
  {
    title: "Monthly Listings",
    value: "30567",
    icon: <MonthlyListings />,
    upDown: <TendingDown />,
    change: ` 4.3%`,
    para: " Down from past  month",
    changeType: "decrease",
  },
  {
    title: "Pending Deliveries",
    value: "108",
    icon: <PendingDeliveries />,
    upDown: <TendingUp />,
    change: ` 2.5% `,
    para: "Up from yesterday",
    changeType: "increase",
  },
  {
    title: "Total Visitors",
    value: "25,534",
    icon: <TotalVisitors />,
    upDown: <TendingUp />,
    change: ` 2.7% `,
    para: "Up from yesterday",
    changeType: "increase",
  },
];
