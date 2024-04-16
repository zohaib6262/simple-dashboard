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
      <div className="flex columns-8 gap-6 px-8 py-4">
        <Input />
      </div>
      <div className=" border-gray-200 w-full h-full px-8 py-8 ">
        <div>
          <h1 className="font-bold text-xl">Reviews</h1>
        </div>
        <div className="flex my-8">
          <button className="bg-white px-4 pt-3 pb-5 rounded-l-lg">
            <Filter />
          </button>

          <button className="bg-white px-4 py-3 ">Filter By</button>
          <button className="bg-white px-4 py-3 ">
            Date
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white px-4 py-3">
            Category
            <ChevronCompactDown className="inline text-center mb-1/2 w-10" />
          </button>

          <button className="bg-white px-4 py-3 text-[#008ECC] text-center">
            <ArrowCounterclockwise className="inline text-center mb-1/2 w-10" />
            Reset Filter
          </button>
          <button className="bg-white px-4 py-3 rounded-r-lg text-[#FF6666]">
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
