import React, { useState } from "react";
import { OrdersTableData } from "./OrdersTableData";

const OrdersTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Listing ID
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Order Type
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Seller Name
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              City
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date-Time
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Payment Status
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Order Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {OrdersTableData.map((item) => {
            let paymentStatusClass;
            let orderStausClass;
            if (item.paymentStatus === "Completed") {
              paymentStatusClass = "text-[#54BCE9]  rounded-3xl cursor-pointer";
            } else if (item.paymentStatus === "Rejected") {
              paymentStatusClass = "text-[#FF6666] rounded-3xl cursor-pointer";
            } else if (item.paymentStatus === "Processing") {
              paymentStatusClass = "text-sky-600   rounded-3xl cursor-pointer";
            }

            if (item.orderStaus === "Completed") {
              orderStausClass = "text-[#54BCE9]  rounded-3xl cursor-pointer";
            } else if (item.orderStaus === "Rejected") {
              orderStausClass = "text-[#FF6666]  rounded-3xl cursor-pointer";
            } else if (item.orderStaus === "Processing") {
              orderStausClass = "text-[#8280FF] rounded-3xl cursor-pointer";
            }

            return (
              <tr key={item.key}>
                <td className="px-4 sm:px-6 py-4 text-xs ">{item.listingId}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.orderType}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.sellerName}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.category}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.city}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.dateTime}</td>
                <td className="text-center">
                  <div
                    className={`${paymentStatusClass} px-1 py-3  mr-5 text-xs`}
                  >
                    {item.paymentStatus}
                  </div>
                </td>
                <td className="text-center">
                  <div
                    className={`${orderStausClass} px-1 py-3  mr-5  text-xs`}
                  >
                    {item.orderStaus}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
