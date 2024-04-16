import React from "react";

import hamburgeIcon from "../../assets/hamburgermenu.png";

import companyLogo from "../../assets/companyLogo.png";
import state from "../../proxyState/store";

const Navbar = () => {
  return (
    <div className="m-4">
      <nav className="flex justify-between items-center  lg:grid lg:grid-cols-[4fr_1fr]">
        <div className="lg:hidden">
          <div className="flex items-center">
            <div className="mr-2">
              <img className="w-12" src={companyLogo} alt={"logo"} />
            </div>
            <div
              className="-mt-8"
              onClick={() => {
                state.mobileSidebar = true;
              }}
            >
              <img src={hamburgeIcon} alt="hamburger-menu" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
