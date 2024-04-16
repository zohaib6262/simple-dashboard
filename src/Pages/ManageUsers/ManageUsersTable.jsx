import React from "react";
import { ManageUserData } from "./ManageUserData.jsx";

const ManageUsersTable = () => {
  return (
    <>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full h-full divide-y divide-gray-200 mb-6">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                User ID
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                User Name
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                User Type
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                Total Spent
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                Orders
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                City
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ManageUserData.map((item) => (
              <tr key={item.key}>
                <td className="px-4 sm:px-6 py-4 text-xs">
                  <div className="flex">
                    <input type="checkbox" className="mx-1" />
                    {item.userId}
                  </div>
                </td>

                <td className="px-4 sm:px-6 py-4 text-xs">{item.userName}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.userType}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.email}</td>

                <td className="px-4 sm:px-6 py-4 text-xs">{item.totalSpent}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.orders}</td>
                <td className="px-4 sm:px-6 py-4 text-xs">{item.city}</td>

                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs">
                  <button className=" text-[#008ECC] rounded-s-md p-2">
                    {/* <item.action1 className="h-4 w-4" /> */}
                    {item.action2}
                  </button>
                  <button className=" text-[#FF6666] rounded-e-md p-2">
                    {/* <item.action2 className="h-4 w-4" /> */}
                    {item.action1}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsersTable;
