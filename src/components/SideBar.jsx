import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SideBarData, SideBarPages, SideBarUser } from "./SideBarData";
import companyLogo from "../assets/companyLogo.png";
const RenderNavLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={item.path}
      className={
        pathname === item.path
          ? "text-white bg-sky-600 flex items-center space-x-2 my-1 rounded-xl"
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

const SideBar = () => {
  return (
    <div className="bg-white h-full w-64 border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-20  mx-auto mb-4"
        />
        {SideBarData.map((item) => {
          return <RenderNavLink key={item.key} item={item} />;
        })}
      </div>

      <div className="px-4 py-1 border-t border-gray-200">
        <span className="text-xs text-slate-400 pl-5">Pages</span>
        {SideBarPages.map((item) => {
          return <RenderNavLink key={item.key} item={item} />;
        })}
      </div>

      <div className="px-4 py-1 border-t border-gray-200">
        {SideBarUser.map((item) => {
          return <RenderNavLink key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
