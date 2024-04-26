import React from "react";

import Input from "./Header/Input";
import { Filter } from "react-bootstrap-icons/dist";
import {
  ArrowCounterclockwise,
  ChevronCompactDown,
  Trash3,
} from "react-bootstrap-icons/dist";
import PaginationManageUser from "../Pages/ManageUsers/PaginationManageUser.jsx";
import ManageUsersTable from "./ManageUsers/ManageUsersTable";
import { Edit } from "./Reviews/ReviewsIcons.jsx";
const ManageUsers = () => {
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-1">
        <Input />
      </div>
      <div className=" border-gray-200 w-full px-8 py-8 ">
        <div>
          <h1 className="font-bold text-xl">Manage Users</h1>
        </div>
        <div className="flex my-8">
          <button className="bg-white lg:px-4 sm:px-2 pt-3 pb-5 rounded-l-lg">
            <Filter />
          </button>
          <button className="border-1 border-red-400"></button>

          <button className="bg-white lg:px-4 sm:px-2 py-3 ">Filter By</button>
          <button className="bg-white lg:px-4 sm:px-2 py-3 ">
            City
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white lg:px-4 sm:px-2 py-3">
            Orders
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white lg:px-4 sm:px-2 py-3 text-[#008ECC] text-center">
            <ArrowCounterclockwise className="inline text-center mb-1/2 w-10" />
            Reset Filter
          </button>
          <button className="bg-white lg:px-4 sm:px-2 py-3 rounded-r-lg text-[#FF6666]">
            <Edit />
          </button>
        </div>
        <div className="bg-white my-4 rounded-xl">
          <ManageUsersTable />
        </div>
        <PaginationManageUser />
      </div>
    </>
  );
};

export default ManageUsers;
