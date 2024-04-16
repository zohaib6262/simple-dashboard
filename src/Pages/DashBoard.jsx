import React from "react";
import Input from "./Header/Input";
import Buttons from "./Header/Buttons";
import DashBoardCard from "./DashBoard/DashBoardCard";

import DashBoardTable from "./DashBoard/DashBoardTable";

const DashBoard = () => {
  return (
    <>
      <div className="flex flex-wrap columns-8 gap-6 px-8 py-4">
        <Input />
        <Buttons />
      </div>
      <div className="border-t w-full px-8 py-4 bg-white">
        <h1 className="font-medium text-2xl text-[#202224]">DashBoard</h1>
        <DashBoardCard />
        <DashBoardTable />
      </div>
    </>
  );
};

export default DashBoard;
