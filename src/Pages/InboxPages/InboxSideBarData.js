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
export const InboxSideBarData = [
  {
    key: "1",
    path: "/inbox",
    label: "Inbox",
    icon: Grid,
  },
  {
    key: "2",
    path: "/inbox/stared",
    label: "Stared",
    icon: List,
  },
  {
    key: "3",
    path: "/inbox/sent",
    label: "Sent",
    icon: Inbox,
  },
  {
    key: "4",
    path: "/inbox/draft",
    label: "Draft",
    icon: Star,
  },
  {
    key: "5",
    path: "/inbox/spam",
    label: "Spam",
    icon: Star,
  },
  {
    key: "6",
    path: "/inbox/bin",
    label: "Bin",
    icon: Star,
  },
];
