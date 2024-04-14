import React from "react";
import CarouselDresses from "./CarsouelDresses";
import CarouselSmartPhones from "./CarsouelSmartPhones";
import CarouselShoes from "./CarsouelShoes";
const CarsouelCardData = () => {
  return (
    <div className="bg-sky-100">
      <div className="flex mx-8 pt-5 mb-2 justify-between">
        <h1 className="font-large text-2xl ">Dresses</h1>
        <button>View All</button>
      </div>
      <div className="px-4 py-2 border-t border-gray-300 mx-8 ">
        <CarouselDresses />
      </div>
      <div className="flex mx-8 pt-5 mb-2 justify-between">
        <h1 className="font-large text-2xl ">Smartphones</h1>
        <button>View All</button>
      </div>
      <div className="px-4 py-2 border-t border-gray-300 mx-8 ">
        <CarouselSmartPhones />
      </div>
      <div className="flex mx-8 pt-5 mb-2 justify-between">
        <h1 className="font-large text-2xl ">Shoes</h1>
        <button>View All</button>
      </div>
      <div className="px-4 py-2 border-t border-gray-300 mx-8 ">
        <CarouselShoes />
      </div>
    </div>
  );
};

export default CarsouelCardData;
