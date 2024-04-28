import React from "react";
import { DownArrow } from "../DashBoard/DashBoardData";
import { ManageShopTableData } from "./ManageShopTableData.jsx";

const ManageShopTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl bg-[#FFFFFF]  mx-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium my-6">Listing Products</h2>
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
                Category
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Rating
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Sold
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] tracking-wider"
              >
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            {ManageShopTableData.map((item) => (
              <tr key={item.key} className="border-b dark:border-neutral-500">
                <td className="px-4 sm:px-6 py-2 text-xs text-[#202224]">
                  {item.orderId}
                </td>
                <td className="px-4 sm:px-6 py-2 text-xs text-[#202224] overflow-hidden ">
                  <img
                    src={item.img}
                    className="h-12 w-25 inline mr-2"
                    alt=""
                  />
                  <span className="overflow-hidden">{item.product}</span>
                </td>
                <td className="px-4 sm:px-6 py-2 text-xs text-[#202224]">
                  {item.category}
                </td>
                <td className="px-4 sm:px-6 py-2 text-xs">
                  {item.icon.map((Icon, index) => (
                    <>
                      <span>
                        <Icon
                          key={index}
                          className="inline-block text-yellow-500"
                        />
                      </span>
                    </>
                  ))}
                </td>
                <td className="px-4 sm:px-6 py-2 text-xs text-[#202224]">
                  {item.description}
                </td>

                <td className="px-4 sm:px-6 py-2 text-xs text-[#202224]">
                  {item.sold}
                </td>
                <td className="px-4 sm:px-6 py-2 text-xs text-[#202224]">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageShopTable;
