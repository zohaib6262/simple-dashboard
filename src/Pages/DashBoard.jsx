import React from "react";
import Input from "./Header/Input";
import Buttons from "./Header/Buttons";

const DashBoard = () => {
  return (
    <>
      <div className="flex flex-wrap columns-8 gap-6 px-8 py-4">
        <Input />
        <Buttons />
      </div>
      <div className="border-t w-full px-8 py-4 bg-white">
        <h1 className="font-bold text-xl text-[#202224]">DashBoard</h1>
      </div>
    </>
  );
};

export default DashBoard;
