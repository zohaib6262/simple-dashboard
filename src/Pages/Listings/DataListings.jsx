import React from "react";
import { ListingsData } from "./Listings";

const DataListings = () => {
  return (
    <div className="flex flex-wrap ">
      {ListingsData.map((item) => {
        return (
          <div
            key={item.key}
            className=" bg-white dark:bg-dark-color sm:w-fit py-4 p-9 rounded-2xl"
          >
            <span className="text-slate-400 text-center dark:text-white dark:bg-white/5 bg-primary/5 rounded-full">
              <img src={item.img} alt="" className="rounded-xl w-12 h-10" />
              <span className="font-sm text-xs text-center">{item.label}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DataListings;
