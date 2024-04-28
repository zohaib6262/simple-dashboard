import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { InboxSideBarData } from "./InboxSideBarData.jsx";
const RenderNavLink = ({ item }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <NavLink
      to={item.path}
      className={
        pathname === item.path
          ? " text-[#54C48D] flex items-center space-x-2 my-1 rounded-xl"
          : "flex items-center space-x-2 my-1"
      }
    >
      <div className=" flex gap-1">
        <span className="mt-3">
          {pathname === item.path ? item.activeIcon : item?.icon}
        </span>

        <span className="mt-2">{item.label}</span>
      </div>
    </NavLink>
  );
};

const InboxSideBar = () => {
  return (
    <>
      <div className="bg-white h-full w-48 border-r border-gray-200 flex flex-col rounded-lg my-4">
        <div className="mr-9">
          <button className="bg-[#008ECC] text-white px-2 py-3 rounded-2xl w-full">
            Compose
          </button>
          <h2 className="my-4 mx-2 font-bold">My Email</h2>
          <div className="mx-4">
            {InboxSideBarData.map((item) => {
              return <RenderNavLink key={item.key} item={item} />;
            })}
          </div>
        </div>
        <div className="my-2 flex justify-start">
          <h2 className="m-1 font-bold">Label</h2>
          <h2 className="m-1 font-bold">+</h2>
        </div>
        <div className="">
          <div className="mt-4 ml-4 flex gap-2">
            <input
              type="checkbox"
              className={`appearance-none w-5 h-5 rounded border-2 border-green-300`}
            />
            <label htmlFor={`checkbox`} className="ml-2">
              Payments
            </label>
          </div>
          <div className="mt-4 ml-4 flex gap-2">
            <input
              type="checkbox"
              className={`appearance-none w-5 h-5 rounded border-2 border-blue-300`}
            />
            <label htmlFor={`checkbox`} className="ml-2">
              Drivers
            </label>
          </div>
          <div className="mt-4 ml-4 flex gap-2">
            <input
              type="checkbox"
              className={`appearance-none w-5 h-5 rounded border-2 border-red-300`}
            />
            <label htmlFor={`checkbox`} className="ml-2">
              Work
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default InboxSideBar;
