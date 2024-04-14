import React from "react";
import { ListingsData } from "./Listings";

const DataListings = () => {
  return (
    <div className="flex flex-wrap">
      {ListingsData.map((item) => {
        return (
          <div
            key={item.key}
            className="flex items-center gap-4 justify-between bg-white dark:bg-dark-color sm:w-fit w-full 2xl:w-[248px] h-[97px] py-4 pl-10 pr-10 2xl:pr-0 rounded-2xl"
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
