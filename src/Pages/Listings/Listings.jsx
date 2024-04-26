import React from "react";
import Input from "../Header/Input";
import DataListings from "./DataListings";

import CarsouelCardData from "./CarsouelCardData";

const Listings = () => {
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-1">
        <Input />
      </div>
      <DataListings />
      <CarsouelCardData />
    </>
  );
};

export default Listings;
