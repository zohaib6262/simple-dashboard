// import * as {HouseAddFill} from "react-bootstrap-icons";
import {
  Dashboard,
  Orders,
  Settings,
  ManageShops,
  ManageUsers,
  Inbox,
  Listings,
  Reviews,
  TeamMembers,
  Logout,
} from "../Pages/SvgIcons/Icons";
export const SideBarMainData = [
  {
    key: "1",
    path: "/",
    label: "Dashboard",
    icon: <Dashboard color="#202224" size="30" />,
    activeIcon: <Dashboard color="#FFFFFF" size="30" />,
  },
  {
    key: "2",
    path: "/listings",
    label: "Listings",
    icon: <Listings color="#202224" size="30" />,
    activeIcon: <Listings color="#FFFFFF" size="30" />,
  },
  {
    key: "3",
    path: "/inbox",
    label: "Inbox",
    icon: <Inbox color="#202224" size="30" />,
    activeIcon: <Inbox color="#FFFFFF" size="30" />,
  },
  {
    key: "4",
    path: "/orders",
    label: "Orders",
    icon: <Orders color="#202224" size="30" />,
    activeIcon: <Orders color="#FFFFFF" size="30" />,
  },
  {
    key: "5",
    path: "/reviews",
    label: "Reviews",
    icon: <Reviews color="#202224" size="30" />,
    activeIcon: <Reviews color="#FFFFFF" size="30" />,
  },
];
export const SideBarPages = [
  {
    key: "6",
    path: "/team-members",
    label: "Team Members",
    icon: <TeamMembers color="#202224" size="30" />,
    activeIcon: <TeamMembers color="#FFFFFF" size="30" />,
  },
  {
    key: "7",
    path: "/manage-users",
    label: "Manage Users",
    icon: <ManageUsers color="#202224" size="30" />,
    activeIcon: <ManageUsers color="#FFFFFF" size="30" />,
  },
  {
    key: "8",
    path: "/manage-shops",
    label: "Manage Shops",
    icon: <ManageShops color="#202224" size="30" />,
    activeIcon: <ManageShops color="#FFFFFF" size="30" />,
  },
];

export const SideBarUser = [
  {
    key: "9",
    path: "/settings",
    label: "Settings",
    icon: <Settings color="#202224" size="30" />,
    activeIcon: <Settings color="#FFFFFF" size="30" />,
  },
  {
    key: "10",
    path: "/logout",
    label: "Logout",
    icon: <Logout color="#202224" size="30" />,
    activeIcon: <Logout color="#FFFFFF" size="30" />,
  },
];
