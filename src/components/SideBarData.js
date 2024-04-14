import {
  Grid,
  Star,
  List,
  Inbox,
  People,
  Bag,
  Gear,
  BoxArrowInRight,
} from "react-bootstrap-icons/dist";
// import * as {HouseAddFill} from "react-bootstrap-icons";
export const SideBarData = [
  {
    key: "1",
    path: "/",
    label: "Dashboard",
    icon: Grid,
  },
  {
    key: "2",
    path: "/listings",
    label: "Listings",
    icon: List,
  },
  {
    key: "3",
    path: "/inbox",
    label: "Inbox",
    icon: Inbox,
  },
  {
    key: "4",
    path: "/orders",
    label: "Orders",
    icon: Star,
  },
  {
    key: "5",
    path: "/reviews",
    label: "Reviews",
    icon: Star,
  },
];
export const SideBarPages = [
  {
    key: "6",
    path: "/team-members",
    label: "Team Members",
    icon: People,
  },
  {
    key: "7",
    path: "/manage-users",
    label: "Manage Users",
    icon: Grid,
  },
  {
    key: "8",
    path: "/manage-shops",
    label: "Manage Shops",
    icon: Bag,
  },
];

export const SideBarUser = [
  {
    key: "9",
    path: "/settings",
    label: "Settings",
    icon: Gear,
  },
  {
    key: "10",
    path: "/logout",
    label: "Logout",
    icon: BoxArrowInRight,
  },
];
