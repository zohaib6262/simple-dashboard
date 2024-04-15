import React, { useState } from "react";

const PaginationControl = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevCurrentPage) =>
      Math.min(prevCurrentPage + 1, totalPages)
    );
  };

  const previousPage = () => {
    setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1));
  };

  return (
    <div className="flex justify-between">
      <div>
        <span className="text-gray-400 text-sm">
          {" "}
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
        </span>
      </div>
      <div>
        <span className="text-gray-400 text-sm">
          Page {currentPage} of {totalPages}
        </span>
      </div>
      <div className="space-x-4 px-5 text-gray-400 text-sm">
        <button
          className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
          onClick={previousPage}
          disabled={currentPage <= 1}
        >
          {"<"}
        </button>

        <button
          className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
          onClick={nextPage}
          disabled={currentPage >= totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

// Usage of PaginationControl component within a parent component
const PaginationManageUser = () => {
  const totalUsers = 150; // This should be dynamic based on the data
  const usersPerPage = 9; // Set according to your pagination design

  // You would also have logic to fetch users based on the current page

  return (
    <div>
      {/* ... rest of your manage users component */}
      <PaginationControl totalItems={totalUsers} itemsPerPage={usersPerPage} />
    </div>
  );
};
export default PaginationManageUser;
