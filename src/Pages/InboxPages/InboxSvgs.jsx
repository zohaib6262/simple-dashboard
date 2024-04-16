export const Sent = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.36671 6.92466C0.948123 6.80658 0.655386 6.42944 0.644826 5.99464C0.634266 5.55984 0.908349 5.16893 1.32071 5.03066L14.7014 0.666665C14.8801 0.608408 15.0764 0.655157 15.2096 0.787718C15.3429 0.92028 15.3907 1.11631 15.3334 1.29533L10.9727 14.6827C10.8351 15.0958 10.4438 15.3706 10.0085 15.3598C9.57314 15.3491 9.19586 15.0554 9.07871 14.636L7.58138 8.41533L1.36671 6.92466Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.2102 0.786667L7.58154 8.41533"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Bin = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.2001 15.4H4.8001C4.13736 15.4 3.6001 14.8627 3.6001 14.2V3.39999H14.4001V14.2C14.4001 14.8627 13.8628 15.4 13.2001 15.4Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.20029 11.8V7"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8004 11.8V7"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.2002 3.4H16.8002"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Spam = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49984 12.9998C8.36177 12.9998 8.24984 13.1118 8.24984 13.2498C8.24984 13.3879 8.36177 13.4998 8.49984 13.4998C8.63791 13.4998 8.74984 13.3879 8.74984 13.2498C8.74984 13.1118 8.63791 12.9998 8.49984 12.9998V12.9998"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.49984 10.9998V5.99985"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.58067 1.67317C9.37826 1.2611 8.95911 1 8.50001 1C8.0409 1 7.62175 1.2611 7.41934 1.67317L1.10401 14.5385C0.949457 14.8529 0.968142 15.2248 1.15343 15.5221C1.33871 15.8195 1.66434 16.0001 2.01467 15.9998H14.9853C15.3357 16.0001 15.6613 15.8195 15.8466 15.5221C16.0319 15.2248 16.0506 14.8529 15.896 14.5385L9.58067 1.67317Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Email = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.36377"
        y="1.54546"
        width="15.2727"
        height="10.9091"
        rx="1.5"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.39 1.94546L10.4671 6.50109C9.60228 7.16636 8.39806 7.16636 7.53326 6.50109L1.61035 1.94546"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Draft = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7933 2.20667C15.3346 1.74993 14.7124 1.49544 14.0651 1.49983C13.4178 1.50421 12.7991 1.7671 12.3467 2.23L2.68 11.8967L1.5 16.5L6.10333 15.3193L15.77 5.65267C16.233 5.20041 16.496 4.58178 16.5004 3.93454C16.5048 3.28729 16.2502 2.66516 15.7933 2.20667Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0708 2.50667L15.4935 5.92933"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.68066 11.896L6.10666 15.316"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Stared = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.48588 1.8L11.7165 6.21933L16.0099 6.64467C16.2186 6.66201 16.3981 6.79917 16.4698 6.99597C16.5414 7.19277 16.492 7.41325 16.3432 7.56067L12.8099 11.0627L14.1199 15.8213C14.1746 16.0275 14.1034 16.2466 13.9378 16.3811C13.7722 16.5156 13.5431 16.5405 13.3525 16.4447L8.99988 14.2893L4.65322 16.442C4.46263 16.5378 4.23356 16.513 4.06799 16.3785C3.90241 16.244 3.83113 16.0248 3.88588 15.8187L5.19588 11.06L1.65988 7.558C1.51114 7.41058 1.46173 7.1901 1.53335 6.9933C1.60496 6.79651 1.78451 6.65934 1.99322 6.642L6.28655 6.21667L8.51388 1.8C8.60728 1.61759 8.79495 1.50284 8.99988 1.50284C9.20481 1.50284 9.39249 1.61759 9.48588 1.8Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
