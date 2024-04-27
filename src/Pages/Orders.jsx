import React from "react";
import Input from "./Header/Input";
import { Filter } from "react-bootstrap-icons/dist";
import {
  ArrowCounterclockwise,
  ChevronCompactDown,
} from "react-bootstrap-icons/dist";
import OrdersTable from "./Orders/OrdersTable";
const Orders = () => {
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-1">
        <Input />
      </div>
      <div className=" border-gray-200 w-full px-8 py-8">
        <div>
          <h1 className="font-bold text-xl">Orders</h1>
        </div>
        <div className="flex my-8">
          <button className="bg-white border border-gray-300 lg:px-4 pt-3 pb-5 rounded-l-lg">
            <Filter />
          </button>

          <button className="bg-white lg:px-4 py-3 border border-gray-300">
            <span className="text-sm">Filter By</span>
          </button>
          <button className="bg-white lg:px-4 py-3 border border-gray-300 ">
            <span className="text-sm">Date</span>
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white lg:px-4 py-3 border border-gray-300">
            <span className="text-sm"> Category</span>
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>
          <button className="bg-white lg:px-4 py-3 border border-gray-300">
            <span className="text-sm"> Order Status</span>
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>
          <button className="bg-white lg:px-4 py-3 text-[#FF6666] text-center border border-gray-300">
            <ArrowCounterclockwise className="inline text-center mb-1/2 w-10" />
            <span className="text-sm"> Reset Filter</span>
          </button>
          <button className="bg-white lg:px-4 py-3 rounded-r-lg  text-[#008ECC] border border-gray-300">
            <span className="text-sm"> Export Report</span>
          </button>
        </div>
        <div className="bg-white my-4  rounded-lg ">
          <OrdersTable />
        </div>
      </div>
    </>
  );
};

export default Orders;
