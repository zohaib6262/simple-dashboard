import React from "react";
import { TeamMemberData } from "./TeamMemberData.jsx";

const Card = ({ image, title, email, firstName, lastName }) => {
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
          {firstName}
          {lastName}
        </h2>
        <p className="mt-2 text-gray-600 text-center">{title}</p>
        <p className="mt-2 text-gray-600 text-center">{email}</p>
      </div>
    </div>
  );
};

export const TeamMembersData = ({ addAllMemberData }) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {addAllMemberData.map((card) => (
        <Card
          key={card.key}
          firstName={card.firstName}
          lastName={card.lastName}
          image={card.img}
          title={card.title}
          email={card.email}
        />
      ))}
    </div>
  );
};
