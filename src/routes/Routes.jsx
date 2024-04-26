import React from "react";
import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
  Navigate,
} from "react-router-dom";
import DashBoard from "../Pages/DashBoard";

import Listings from "../Pages/Listings/Listings.jsx";
import Inbox from "../Pages/Inbox";
import Orders from "../Pages/Orders";
import Reviews from "../Pages/Reviews";
import TeamMembers from "../Pages/TeamMembers";
import ManageUsers from "../Pages/ManageUsers";
import ManageShops from "../Pages/ManageShops.jsx";
import Settings from "../Pages/Settings";
import Logout from "../Pages/Logout";

import InboxComponent from "../Pages/InboxPages/InboxComponent.jsx";
import Stared from "../Pages/InboxPages/Stared.jsx";
import Sent from "../Pages/InboxPages/Sent.jsx";
import Draft from "../Pages/InboxPages/Draft.jsx";
import Spam from "../Pages/InboxPages/Spam.jsx";
import Bin from "../Pages/InboxPages/Bin.jsx";
import Layout from "../Pages/Layout/Layout.jsx";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Routing>
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
        </Routing>
      </Layout>
    </Router>
  );
};

export default Routes;
