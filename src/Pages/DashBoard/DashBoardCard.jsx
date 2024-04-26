import React from "react";
import { DashBoardData } from "./DashBoardData.jsx";
const DashBoardCard = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DashBoardData.map((card, index) => (
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex justify-between">
              <div>
                <h2 className="ml-0 text-base  text-[#202224] font-medium">
                  {card.title}
                </h2>
              </div>
              <div>{card.icon}</div>
            </div>
            <div className="mt-1">
              <p className=" font-bold text-[#202224] text-2xl">{card.value}</p>
            </div>
            <div className="mt-2 flex gap-2 ">
              <p>{card.upDown}</p>
              <p
                className={`text-sm inline-block ${
                  card.changeType === "increase"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {card.change}
              </p>
              <p className="font-medium text-sm">{card.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoardCard;
