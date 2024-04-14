import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideBar from "./components/SideBar";
import DashBoard from "./Pages/DashBoard";
import Listings from "./Pages/Listings/Listings.jsx";
import Inbox from "./Pages/Inbox";
import Orders from "./Pages/Orders";
import Reviews from "./Pages/Reviews";
import TeamMembers from "./Pages/TeamMembers";
import ManageUsers from "./Pages/ManageUsers";
import ManageShops from "./Pages/ManageShops";
import Settings from "./Pages/Settings";
import Logout from "./Pages/Logout";

import InboxComponent from "../src/Pages/InboxPages/InboxComponent.jsx";
import Stared from "../src/Pages/InboxPages/Stared.jsx";
import Sent from "../src/Pages/InboxPages/Sent.jsx";
import Draft from "../src/Pages/InboxPages/Draft.jsx";
import Spam from "../src/Pages/InboxPages/Spam.jsx";
import Bin from "../src/Pages/InboxPages/Bin.jsx";
const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/inbox" element={<Inbox />}>
              <Route exact path="/inbox" element={<InboxComponent />} />
              <Route path="/inbox/stared" element={<Stared />} />
              <Route path="/inbox/sent" element={<Sent />} />
              <Route path="/inbox/draft" element={<Draft />} />
              <Route path="/inbox/spam" element={<Spam />} />
              <Route path="/inbox/bin" element={<Bin />} />
            </Route>
            <Route path="/orders" element={<Orders />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/team-members" element={<TeamMembers />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/manage-shops" element={<ManageShops />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
