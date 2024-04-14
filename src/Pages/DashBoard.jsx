import React from "react";
import Input from "./Header/Input";
import Buttons from "./Header/Buttons";

const DashBoard = () => {
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-4">
        <Input />
        <Buttons />
      </div>
      <div className="border-t border-gray-200 w-full px-8 py-4 bg-sky-100">
        <h1 className="font-bold text-xl">DashBoard</h1>
      </div>
    </>
  );
};

export default DashBoard;
