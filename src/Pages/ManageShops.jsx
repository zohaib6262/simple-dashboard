import React from "react";
import Input from "./Header/Input";
import userImage from "../assets/manageShop.png";
import ManageShopTable from "./ManageShop/ManageShopTable";
const ManageShops = () => {
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-1">
        <Input />
      </div>
      <div className=" border-gray-200 w-full h-full w- px-8 py-8 ">
        <div>
          <h1 className=" text-2xl my-5">Shop Details</h1>
        </div>
        <div className="flex items-center drop-shadow-2xl border-x-stone-700">
          <img src={userImage} alt="" className="w-36 h-36" />
          <div>
            <h2>Razer</h2>
            <h4 className="text-sm">Jane Cooper</h4>
            <p className="text-xs">8502 Preston Rd. Inglewood, Maine 98380</p>
          </div>
        </div>

        <div className="bg-white my-4  rounded-lg ">
          <ManageShopTable />
        </div>
      </div>
    </>
  );
};

export default ManageShops;
