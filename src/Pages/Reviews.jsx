import React from "react";
import Input from "./Header/Input";
import { Filter } from "react-bootstrap-icons/dist";
import {
  ArrowCounterclockwise,
  ChevronCompactDown,
  Trash3,
} from "react-bootstrap-icons/dist";

import ReviewsTable from "./Reviews/ReviewsTable";
const Reviews = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-4">
        <Input className="w-full sm:w-auto" />
      </div>
      <div className=" border-gray-200 w-full h-full px-8 py-8 bg-sky-100">
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

          <button className="bg-white px-4 py-3 text-sky-400 text-center">
            <ArrowCounterclockwise className="inline text-center mb-1/2 w-10" />
            Reset Filter
          </button>
          <button className="bg-white px-4 py-3 rounded-r-lg text-red-400">
            <Trash3 />
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
