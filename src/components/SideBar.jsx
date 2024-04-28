import React from "react";

import { useLocation, NavLink } from "react-router-dom";

import companyLogo from "../assets/companyLogo.png";

import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";

import state from "../proxyState/store";
import { useSnapshot } from "valtio";
import { SideBarMainData, SideBarPages, SideBarUser } from "./SideBarData.jsx";
import Navbar from "../Pages/Navbar/Navbar";

const RenderNavLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={item.path}
      className={`flex items-center justify-start px-4 border-l-8 ${
        pathname === item.path ? " border-[#008ECC]" : "border-transparent"
      }`}
      activeClassName="border-[#008ECC]"
    >
      <li
        className={` font-medium font-primary flex my-1 items-center w-full mr-2${
          pathname === item.path
            ? " text-[#fff] bg-[#008ECC] rounded-lg py-2 px-2 items-center border-[#008ECC]"
            : "text-black py-2 px-2"
        }`}
      >
        <div className=" flex gap-1">
          <span className="mt-2">
            {pathname === item.path ? item.activeIcon : item?.icon}
          </span>

          <span className="mt-2">{item.label}</span>
        </div>
      </li>
    </NavLink>
  );
};

const SideBar = ({ children }) => {
  const snap = useSnapshot(state);

  return (
    <div className="">
      <aside
        id="default-sidebar"
        className={`bg-white text-black h-full  ${
          snap.mobileSidebar === false ? " sidebarHide " : ""
        } py-2 border-r border-gray-300 lg:block fixed top-0 lg:left-0 left-0 z-40 w-60 h-screen  translate-x-0 transition-all duration-500`}
        aria-label="Sidebar"
      >
        <div id="scrollBar" className="h-full overflow-y-auto  ">
          <div className="flex items-center  justify-between">
            <div className="flex items-center w-full flex-col ">
              <div>
                <img
                  className="w-20 mx-auto mb-4"
                  src={companyLogo}
                  alt="logo"
                />
              </div>
            </div>

            <div
              className="mr-2 lg:hidden"
              onClick={() => {
                state.mobileSidebar = false;
              }}
            >
              <FaArrowRightLong className="text-3xl  text-sky-600" />
            </div>
          </div>

          {SideBarMainData.map((item) => {
            return <RenderNavLink key={item.key} item={item} />;
          })}

          <div className="py-1 border-t border-gray-200">
            <span className="text-xs text-slate-400 px-8">Pages</span>
            {SideBarPages.map((item) => {
              return <RenderNavLink key={item.key} item={item} />;
            })}
          </div>

          <div className="py-1 border-t border-gray-200">
            {SideBarUser.map((item) => {
              return <RenderNavLink key={item.key} item={item} />;
            })}
          </div>
        </div>
      </aside>

      <div className="  lg:ml-64">
        <div className="">
          <Navbar />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
