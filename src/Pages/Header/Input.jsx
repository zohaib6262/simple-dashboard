import React from "react";
import { Search } from "react-bootstrap-icons/dist";

function Input() {
  return (
    <form className="flex  border-hidden rounded-lg overflow-visible bg-[#EDF8FD]">
      <input
        type="text"
        placeholder="Search..."
        className="px-2 py-2 w-full sm:w-auto rounded-lg  outline-none bg-[#EDF8FD]"
      />
      <div className="m-auto relative lg:-left-2 sm:-left-10 text-white bg-[#008ECC] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1 search-icon-container">
        <Search className="w-4 h-6 " />
      </div>
    </form>
  );
}

export default Input;
