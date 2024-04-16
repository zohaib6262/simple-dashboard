import React from "react";
import { Search } from "react-bootstrap-icons/dist";

function Input() {
  return (
    <>
      <form className="flex sm:flex-row border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD] relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 w-full sm:w-auto outline-none bg-sky-100"
        />
        <div className="m-auto text-white bg-[#008ECC] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2   ">
          <Search className="w-4 h-6" />
        </div>
      </form>
    </>
  );
}

export default Input;
