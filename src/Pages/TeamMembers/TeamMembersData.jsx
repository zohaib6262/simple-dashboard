import React from "react";
import { TeamMemberData } from "./TeamMemberData";

const Card = ({ image, title, email, name }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden m-4 p-10 flex flex-col items-center w-64 h-72">
      <div className="h-20 w-20 flex items-center justify-center">
        <img
          className="w-full h-full object-cover object-center rounded-full"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-gray-800 text-xl font-semibold text-center">
          {name}
        </h2>
        <p className="mt-2 text-gray-600 text-center">{title}</p>
        <p className="mt-2 text-gray-600 text-center">{email}</p>
      </div>
    </div>
  );
};

export const TeamMembersData = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {TeamMemberData.map((card) => (
        <Card
          key={card.key}
          name={card.name}
          image={card.img}
          title={card.title}
          email={card.email}
        />
      ))}
    </div>
  );
};
