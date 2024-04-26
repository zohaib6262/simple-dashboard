import React from "react";
import { Search } from "react-bootstrap-icons/dist";

function Input() {
  return (
    <div className="w-80">
      <form className="flex sm:flex-row border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 w-full sm:w-auto outline-none bg-[#EDF8FD]"
        />
        <div className="m-auto relative left-5 text-white bg-[#008ECC] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1 search-icon-container">
          <Search className="w-4 h-6 " />
        </div>
      </form>
    </div>
  );
}

export default Input;
