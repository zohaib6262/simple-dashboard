import { Key } from "react-bootstrap-icons";

export const DownArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10L12 15"
        stroke="#202224"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 15L17 10"
        stroke="#202224"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
import img1 from "../../assets/product1.png";
import img2 from "../../assets/product2.jpg";
import img3 from "../../assets/product3.png";
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

export const DashBoardTableData = [
  {
    key: "1",
    orderId: "#1231",
    img: img1,
    product: "AMD Radeon Graphic card Rx5600 xt",
    sellerName: "Devon Lane",
    city: "Faisalabad",
    deliveryType: "Local Delivery",

    dateTime: "06.05.2023 - 10:32 PM",
    total: "$346.00",
  },
  {
    orderId: "#1232",
    key: "2",
    img: img2,
    product: "Apple Airpods Pro (2nd Generation)  ",
    sellerName: "Cody Fisher",
    city: "Karachi",
    deliveryType: "Free Shipping",

    dateTime: "02.05.2023 - 06:46 PM",
    total: "$126.00",
  },
  {
    orderId: "#1233",
    key: "3",
    img: img3,
    product: "Sony PlayStation 5",
    sellerName: "Theresa Webb",
    city: "Lahore",
    deliveryType: "Standard Shipping",
    dateTime: "23.03.2023 - 04.37 PM",
    total: "$648.00",
  },
];
