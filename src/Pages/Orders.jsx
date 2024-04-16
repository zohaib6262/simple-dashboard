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
      <div className="flex columns-8 gap-6 px-8 py-4">
        <Input />
      </div>
      <div className=" border-gray-200 w-full px-8 py-8">
        <div>
          <h1 className="font-bold text-xl">Orders</h1>
        </div>
        <div className="flex my-8">
          <button className="bg-white px-4 pt-3 pb-5 rounded-l-lg">
            <Filter />
          </button>

          <button className="bg-white px-4 py-3 ">Filter By</button>
          <button className="bg-white px-4 py-3 ">
            Date
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white px-4 py-3">
            Category
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>
          <button className="bg-white px-4 py-3">
            Order Status
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>
          <button className="bg-white px-4 py-3 text-[#FF6666] text-center">
            <ArrowCounterclockwise className="inline text-center mb-1/2 w-10" />
            Reset Filter
          </button>
          <button className="bg-white px-4 py-3 rounded-r-lg text-[#008ECC]">
            Export Report
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
