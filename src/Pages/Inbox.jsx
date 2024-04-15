import React, { useEffect } from "react";
import Input from "./Header/Input";

import InboxSideBar from "./InboxPages/InboxSideBar.jsx";
import { useLocation } from "react-router-dom";

import InboxComponent from "./InboxPages/InboxComponent.jsx";
import Stared from "./InboxPages/Stared.jsx";
import Sent from "./InboxPages/Sent.jsx";
import Draft from "./InboxPages/Draft.jsx";
import Spam from "./InboxPages/Spam.jsx";
import Bin from "./InboxPages/Bin.jsx";

const Inbox = () => {
  const { pathname } = useLocation();
  let content;
  if (pathname === "/inbox") {
    content = <InboxComponent />;
  } else if (pathname === "/inbox/stared") {
    content = <Stared />;
  } else if (pathname === "/inbox/sent") {
    content = <Sent />;
  } else if (pathname === "/inbox/draft") {
    content = <Draft />;
  } else if (pathname === "/inbox/spam") {
    content = <Spam />;
  } else if (pathname === "/inbox/bin") {
    content = <Bin />;
  }

  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-4 ">
        <Input />
      </div>
      <div className="border-t border-gray-300 w-full px-8 py-4 bg-sky-100">
        <h1 className="font-bold text-xl">Inbox</h1>

        <div className="flex">
          <InboxSideBar />
          {content}
        </div>
      </div>
    </>
  );
};

export default Inbox;
