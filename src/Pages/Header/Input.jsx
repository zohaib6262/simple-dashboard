import React from "react";
import { Search } from "react-bootstrap-icons/dist";

function Input() {
  return (
    <form className="flex sm:flex-row items-center border-2 border-hidden rounded-lg overflow-hidden bg-sky-100">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 w-full sm:w-auto outline-none bg-sky-100"
      />
      <div className="mt-2 sm:mt-0 sm:ml-2 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Search />
      </div>
    </form>
  );
}

export default Input;
