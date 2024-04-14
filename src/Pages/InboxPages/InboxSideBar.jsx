import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { InboxSideBarData } from "./InboxSideBarData";
const RenderNavLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      to={item.path}
      className={
        pathname === item.path
          ? "text-green-700 bg-green-200 flex items-center space-x-2 my-1 rounded-xl"
          : "flex items-center space-x-2 my-1"
      }
    >
      <div className="py-3 flex">
        <item.icon className="w-6 h-6 mx-4" />
        <span>{item.label}</span>
      </div>
    </NavLink>
  );
};

const InboxSideBar = () => {
  return (
    <div className="bg-white h-full w-64 border-r border-gray-200 flex flex-col rounded-lg my-4">
      <div className="p-4">
        <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-3 rounded-lg w-full">
          Compose
        </button>
        <h2 className="m-3 font-bold">My Email</h2>
        {InboxSideBarData.map((item) => {
          return <RenderNavLink key={item.key} item={item} />;
        })}
      </div>
      <div className="mx-5 flex justify-between">
        <h2 className="m-1 font-bold">Label</h2>
        <h2 className="m-1 font-bold">+</h2>
      </div>
      <div className="my-3">
        <div className="mt-2 ml-8 flex ">
          <input
            type="checkbox"
            className={`appearance-none w-5 h-5 rounded border-2 border-green-300`}
          />
          <label htmlFor={`checkbox`} className="ml-2">
            Payments
          </label>
        </div>
        <div className="mt-2 ml-8 flex ">
          <input
            type="checkbox"
            className={`appearance-none w-5 h-5 rounded border-2 border-blue-300`}
          />
          <label htmlFor={`checkbox`} className="ml-2">
            Drivers
          </label>
        </div>
        <div className="mt-2 ml-8 flex ">
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
  );
};

export default InboxSideBar;
