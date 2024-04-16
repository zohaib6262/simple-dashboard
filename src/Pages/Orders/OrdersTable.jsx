import React from "react";
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
              paymentStatusClass =
                "text-green-700 bg-green-200  rounded-sm cursor-pointer";
            } else if (item.paymentStatus === "Rejected") {
              paymentStatusClass =
                "text-orange-500 bg-orange-200  rounded-sm cursor-pointer";
            } else if (item.paymentStatus === "Processing") {
              paymentStatusClass =
                "text-sky-600 bg-blue-200  rounded-sm cursor-pointer";
            }

            if (item.orderStaus === "Completed") {
              orderStausClass =
                "text-green-700 bg-green-200  rounded-sm cursor-pointer";
            } else if (item.orderStaus === "Rejected") {
              orderStausClass =
                "text-orange-500 bg-orange-200   rounded-sm cursor-pointer";
            } else if (item.orderStaus === "Processing") {
              orderStausClass =
                "text-sky-600 bg-sky-200   rounded-sm cursor-pointer";
            }

            return (
              <tr key={item.key}>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.listingId}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.orderType}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.sellerName}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.category}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.city}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.dateTime}</td>
                <td className={`${paymentStatusClass} px-1 sm:px-2 text-xs`}>
                  {item.paymentStatus}
                </td>
                <td className={`${orderStausClass} px-1 sm:px-2  text-xs`}>
                  {item.orderStaus}
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
