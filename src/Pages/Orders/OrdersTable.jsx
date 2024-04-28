import React, { useState } from "react";
import { OrdersTableData } from "./OrdersTableData";
import Modal from "./Modal"; // Assuming you have a modal component

const OrdersTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function handleStopRemoveModal() {
    // modal.current.close();
    setIsModalOpen(false);
  }

  return (
    <div className="overflow-x-auto border border-gray-300 rounded-l-xl rounded-e-xl">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr className="border-b border-gray-300">
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left  text-xs font-bold text-[#202224] uppercase tracking-wider"
            >
              Listing ID
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] uppercase tracking-wider"
            >
              Order Type
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] uppercase tracking-wider"
            >
              Seller Name
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] uppercase tracking-wider"
            >
              City
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] uppercase tracking-wider"
            >
              Date-Time
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] uppercase tracking-wider"
            >
              Payment Status
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-left text-xs font-bold text-[#202224] uppercase tracking-wider"
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
                <td className="px-4 sm:px-6 py-4 text-xs cursor-pointer">
                  {item.listingId}
                </td>
                <td className="px-4 sm:px-6 py-4 text-xs ">{item.orderType}</td>
                <td className="px-4 sm:px-6 py-4 text-xs ">
                  {item.sellerName}
                </td>
                <td className="px-4 sm:px-6 py-4 text-xs ">{item.category}</td>
                <td className="px-4 sm:px-6 py-4 text-xs ">{item.city}</td>
                <td
                  className="px-4 sm:px-6 py-4 text-xs "
                  onClick={() => handleClick(item)}
                >
                  {item.dateTime}
                </td>
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
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          item={selectedItem}
          close={handleCloseModal}
          onCancel={handleStopRemoveModal}
          onConfirm={handleCloseModal}
        />
      )}
    </div>
  );
};

export default OrdersTable;
