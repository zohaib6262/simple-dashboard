import React from "react";
import Input from "./Header/Input";
import { Filter } from "react-bootstrap-icons/dist";
import {
  ArrowCounterclockwise,
  ChevronCompactDown,
  Trash3,
} from "react-bootstrap-icons/dist";

import ReviewsTable from "./Reviews/ReviewsTable";
import { Edit } from "./Reviews/ReviewsIcons";
const Reviews = () => {
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-1">
        <Input />
      </div>
      <div className=" border-gray-200 w-full h-full px-8 py-8 ">
        <div>
          <h1 className="font-bold text-xl">Reviews</h1>
        </div>
        <div className="flex my-8">
          <button className="bg-white border border-gray-300 rounded-l-lg lg:px-4 pt-3 pb-5 ">
            <Filter />
          </button>

          <button className="bg-white lg:px-4 py-3 border border-gray-300">
            <span className="text-sm">Filter By</span>
          </button>
          <button className="bg-white lg:px-4 py-3 border border-gray-300 ">
            <span className="text-sm">Date</span>
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white lg:px-4 py-3 border border-gray-300">
            <span className="text-sm"> Category</span>
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white lg:px-4 py-3 text-[#008ECC] text-center border border-gray-300">
            <ArrowCounterclockwise className="inline text-center mb-1/2 w-10" />
            <span className="text-sm"> Reset Filter</span>
          </button>
          <button className="bg-white lg:px-4 sm:px-2 py-3 rounded-r-lg text-[#FF6666] border border-gray-300">
            <Edit />
          </button>
        </div>
        <div className="bg-white my-4  rounded-lg ">
          <ReviewsTable />
        </div>
      </div>
    </>
  );
};

export default Reviews;
