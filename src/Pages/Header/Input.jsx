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
      <div className="my-auto text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2   ">
        <Search />
      </div>
    </form>
  );
}

export default Input;
