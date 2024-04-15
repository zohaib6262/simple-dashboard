import React from "react";

import { Link, useLocation, NavLink } from "react-router-dom";
import "./SideBar.css";
import companyLogo from "../assets/companyLogo.png";
import hamBurger from "../assets/arrowleft.svg";

import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import { FiMinus, FiArrowUp } from "react-icons/fi";
import state from "../proxyState/store";
import { useSnapshot } from "valtio";
import { SideBarMainData, SideBarPages, SideBarUser } from "./SideBarData";
import Navbar from "../Pages/Navbar/Navbar";

const RenderNavLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <>
      <NavLink to={item.path} className="flex pr-5">
        {pathname === item.path && (
          <div className="pr-5 mt-4">
            <span className="border-l-10 border-8 border-sky-700 rounded-r-lg"></span>
          </div>
        )}
        <div
          className={
            pathname === item.path
              ? "text-white bg-sky-600 flex items-center space-x-2 my-1 rounded-xl w-full "
              : "flex items-center space-x-2 my-1 mx-4"
          }
        >
          <div className="py-3 flex">
            <item.icon className="w-6 h-6 mx-4" />
            <span>{item.label}</span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

const SideBar = ({ children }) => {
  const snap = useSnapshot(state);

  return (
    <div className="">
      <aside
        id="default-sidebar"
        className={`bg-white text-black  ${
          snap.mobileSidebar === false ? " sidebarHide " : ""
        } py-2 border-r border-gray-300 lg:block fixed top-0 lg:left-0 left-0 z-40 w-64 h-screen  translate-x-0 transition-all duration-500`}
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
              <FaArrowRightLong className="text-3xl  text-sky-500" />
            </div>
          </div>

          {SideBarMainData.map((item) => {
            return <RenderNavLink key={item.key} item={item} />;
          })}

          <div className="py-1 border-t border-gray-200">
            <span className="text-xs text-slate-400 pl-5">Pages</span>
            {SideBarPages.map((item) => {
              return <RenderNavLink key={item.key} item={item} />;
            })}
          </div>

          <div className="py-1 border-t border-gray-200">
            <span className="text-xs text-slate-400 pl-5">Settings</span>
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
