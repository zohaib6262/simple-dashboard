import React from "react";
import { ReviewsTableData } from "./ReviewsTableData.jsx";

const ReviewsTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="w-full h-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
            >
              Product
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
            >
              Seller Name
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
            >
              Cutomer Name
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
            >
              Rating
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
            >
              Review
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {ReviewsTableData.map((item) => (
            <tr key={item.key}>
              <td className="px-4 sm:px-6 py-4 text-xs">
                <input type="checkbox" />
                <img src={item.img} className="h-12 w-25 inline mx-2" alt="" />
                {item.product}
              </td>
              <td className="px-4 sm:px-6 py-4 text-xs">{item.sellerName}</td>
              <td className="px-4 sm:px-6 py-4 text-xs">{item.customerName}</td>
              <td className="px-4 sm:px-6 py-4 text-xs">
                {item.rating.map((Icon, index) => (
                  <Icon key={index} className="inline-block text-yellow-500" />
                ))}
              </td>
              <td className="px-4 sm:px-6 py-4 text-xs">{item.review}</td>
              <td className="px-4 sm:px-6 py-4 text-xs">{item.dateTime}</td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs">
                <button className=" text-[#008ECC] rounded-s-md p-2">
                  {item.delete}
                </button>
                <button className=" text-[#FF6666] rounded-e-md p-2">
                  {item.edit}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsTable;
