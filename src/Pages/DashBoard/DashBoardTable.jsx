import React from "react";
import { DashBoardTableData, DownArrow } from "./DashBoardData";

const DashBoardTable = () => {
  return (
    <>
      <div className="rounded-xl bg-[#FFFFFF] ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium my-6">Latest Orders</h2>
          <div className="flex gap-4">
            <div className="flex">
              <h2>Show 3</h2>
              <DownArrow />
            </div>
            <button>View All</button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-l-xl rounded-e-xl">
        <table className="w-full h-full mb-6">
          <thead className="">
            <tr className="bg-[#EDF8FD] rounded-full rounded-l-xl rounded-e-xl">
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                City
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Data - Time
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Delivery Type
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Seller Name
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {DashBoardTableData.map((item) => (
              <tr key={item.key} className="border-b dark:border-neutral-500">
                <td className="px-4 sm:px-6 py-4 text-xs">{item.orderId}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">
                  <img
                    src={item.img}
                    className="h-12 w-25 inline mx-2"
                    alt=""
                  />
                  {item.product}
                </td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.city}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.dateTime}</td>

                <td className="px-4 sm:px-6 py-4 text-xs">
                  {item.deliveryType}
                </td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.sellerName}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoardTable;
