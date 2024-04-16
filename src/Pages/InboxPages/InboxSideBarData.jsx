import { Draft, Email, Sent, Spam, Bin, Stared } from "./InboxSvgs.jsx";
export const InboxSideBarData = [
  {
    key: "1",
    path: "/inbox",
    label: "Inbox",
    icon: <Email color="#202224" size="25" />,
    activeIcon: <Email color="#54C48D" size="25" />,
  },
  {
    key: "2",
    path: "/inbox/stared",
    label: "Stared",
    icon: <Stared color="#202224" size="25" />,
    activeIcon: <Stared color="#54C48D" size="25" />,
  },
  {
    key: "3",
    path: "/inbox/sent",
    label: "Sent",
    icon: <Sent color="#202224" size="25" />,
    activeIcon: <Sent color="#54C48D" size="25" />,
  },
  {
    key: "4",
    path: "/inbox/draft",
    label: "Draft",
    icon: <Draft color="#202224" size="25" />,
    activeIcon: <Draft color="#54C48D" size="25" />,
  },
  {
    key: "5",
    path: "/inbox/spam",
    label: "Spam",
    icon: <Spam color="#202224" size="25" />,
    activeIcon: <Spam color="#54C48D" size="25" />,
  },
  {
    key: "6",
    path: "/inbox/bin",
    label: "Bin",
    icon: <Bin color="#202224" size="25" />,
    activeIcon: <Bin color="#54C48D" size="25" />,
  },
];
