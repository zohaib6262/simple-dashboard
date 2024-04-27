import React from "react";

export const Dashboard = ({ color, size }) => {
  return (
    // <svg
    //   width={size}
    //   height={size}
    //   viewBox={`0 0 ${size} ${size}`}
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect
    //     x="1"
    //     y="1"
    //     width="8"
    //     height="10"
    //     rx="2"
    //     stroke={color}
    //     stroke-width="2"
    //   />
    //   <rect
    //     x="1"
    //     y="15"
    //     width="8"
    //     height="6"
    //     rx="2"
    //     stroke={color}
    //     stroke-width="2"
    //   />
    //   <rect
    //     x="13"
    //     y="11"
    //     width="8"
    //     height="10"
    //     rx="2"
    //     stroke={color}
    //     stroke-width="2"
    //   />
    //   <rect
    //     x="13"
    //     y="1"
    //     width="8"
    //     height="6"
    //     rx="2"
    //     stroke={color}
    //     stroke-width="2"
    //   />
    // </svg>
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.5"
        y="4"
        width="7"
        height="7"
        rx="2.5"
        stroke={color}
        stroke-width="1.5"
      />
      <rect
        x="3.5"
        y="14"
        width="7"
        height="7"
        rx="2.5"
        stroke={color}
        stroke-width="1.5"
      />
      <rect
        x="13.5"
        y="4"
        width="7"
        height="7"
        rx="2.5"
        stroke={color}
        stroke-width="1.5"
      />
      <rect
        x="13.5"
        y="14"
        width="7"
        height="7"
        rx="2.5"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export const Listings = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 21H5M21 21H19M5 21H19M5 21V9.32837M19 21V9.32837M5 9.32837C4.96299 9.307 4.92651 9.28434 4.8906 9.2604L4.35024 8.90016C3.56331 8.37554 3.25144 7.37141 3.60269 6.49328L4.49711 4.25722C4.80084 3.4979 5.53626 3 6.35407 3H17.6459C18.4637 3 19.1992 3.4979 19.5029 4.25722L20.3973 6.49328C20.7486 7.37141 20.4367 8.37554 19.6498 8.90016L19.1094 9.2604C19.0735 9.28434 19.037 9.307 19 9.32837M5 9.32837C5.65537 9.70699 6.47351 9.68433 7.1094 9.2604L9 8L10.8906 9.2604C11.5624 9.70827 12.4376 9.70827 13.1094 9.2604L15 8L16.8906 9.2604C17.5265 9.68433 18.3446 9.70699 19 9.32837"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 21V16C14 14.8954 13.1046 14 12 14V14C10.8954 14 10 14.8954 10 16V21"
        stroke={color}
      />
    </svg>
  );
};

export const Inbox = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L8.10764 6.61227L8.10967 6.61396C8.78785 7.11128 9.12714 7.3601 9.49876 7.45621C9.82723 7.54117 10.1725 7.54117 10.501 7.45621C10.8729 7.36001 11.2132 7.11047 11.8926 6.61227C11.8926 6.61227 15.8101 3.60594 18 2M1 11.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V11.8036C19 12.9215 19 13.4805 18.7822 13.9079C18.5905 14.2842 18.2837 14.5905 17.9074 14.7822C17.48 15 16.921 15 15.8031 15H4.19691C3.07899 15 2.5192 15 2.0918 14.7822C1.71547 14.5905 1.40973 14.2842 1.21799 13.9079C1 13.4801 1 12.9203 1 11.8002Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Orders = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5294 13.1765H19" stroke={color} stroke-linecap="round" />
      <path d="M10.5294 8H19" stroke={color} stroke-linecap="round" />
      <path d="M10.5294 2.58824H19" stroke={color} stroke-linecap="round" />
      <path
        d="M6 1L2.5625 4L1 2.63636"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L2.5625 9L1 7.63636"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 11L2.5625 14L1 12.6364"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Reviews = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 1L13.3182 7.10992L20 7.90215L15.06 12.4705L16.3713 19.0701L10.5 15.7836L4.62868 19.0701L5.94 12.4705L1 7.90215L7.68177 7.10992L10.5 1Z"
        stroke={color}
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TeamMembers = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 15.9999C19 14.2583 17.3304 12.7767 15 12.2275M13 16C13 13.7909 10.3137 12 7 12C3.68629 12 1 13.7909 1 16M13 9C15.2091 9 17 7.20914 17 5C17 2.79086 15.2091 1 13 1M7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ManageUsers = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 16C15 14.3431 12.7614 13 10 13C7.23858 13 5 14.3431 5 16M19 13.0004C19 11.7702 17.7659 10.7129 16 10.25M1 13.0004C1 11.7702 2.2341 10.7129 4 10.25M16 6.23611C16.6137 5.68679 17 4.8885 17 4C17 2.34315 15.6569 1 14 1C13.2316 1 12.5308 1.28885 12 1.76389M4 6.23611C3.38625 5.68679 3 4.8885 3 4C3 2.34315 4.34315 1 6 1C6.76835 1 7.46924 1.28885 8 1.76389M10 10C8.34315 10 7 8.65685 7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7C13 8.65685 11.6569 10 10 10Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ManageShops = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 9H20L19.1654 18.1811C19.0717 19.2112 18.208 20 17.1736 20H6.82643C5.79202 20 4.92829 19.2112 4.83464 18.1811L4 9Z"
        stroke={color}
        stroke-linejoin="round"
      />
      <path
        d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11"
        stroke={color}
        stroke-linecap="round"
      />
    </svg>
  );
};

export const Settings = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6634 19.7665L17.3379 16.614C17.9437 16.2775 18.246 16.1092 18.4662 15.8738C18.6611 15.6655 18.8085 15.4202 18.8985 15.1536C19 14.853 19 14.5172 19 13.8473V7.53311C19 6.8632 19 6.52737 18.8985 6.22681C18.8085 5.96025 18.6611 5.71471 18.4662 5.50643C18.2469 5.27204 17.9453 5.10448 17.3448 4.77086L11.6624 1.61402C11.0566 1.27749 10.7543 1.10956 10.4323 1.0437C10.1474 0.985432 9.85287 0.985432 9.56796 1.0437C9.24595 1.10956 8.94267 1.27749 8.33691 1.61402L2.66132 4.76709C2.05627 5.10322 1.75398 5.27116 1.53383 5.50643C1.33893 5.71471 1.19174 5.96025 1.10173 6.22681C1 6.52808 1 6.86479 1 7.53785V13.8428C1 14.5159 1 14.8523 1.10173 15.1536C1.19174 15.4202 1.33893 15.6655 1.53383 15.8738C1.75411 16.1092 2.05662 16.2775 2.66238 16.614L8.33691 19.7665C8.94266 20.103 9.24596 20.271 9.56796 20.3369C9.85287 20.3952 10.1474 20.3952 10.4323 20.3369C10.7543 20.271 11.0576 20.103 11.6634 19.7665Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.88227 10.6902C6.88227 12.347 8.27813 13.6902 10 13.6902C11.7219 13.6902 13.1177 12.347 13.1177 10.6902C13.1177 9.03334 11.7219 7.69019 10 7.69019C8.27813 7.69019 6.88227 9.03334 6.88227 10.6902Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Logout = ({ color, size }) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1H1V15C1 16.1046 1.89543 17 3 17H11"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 12L15 9M15 9L12 6M15 9H5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
