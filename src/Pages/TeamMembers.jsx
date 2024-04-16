import React from "react";
import Input from "./Header/Input";
import { TeamMembersData } from "./TeamMembers/TeamMembersData";

const TeamMembers = () => {
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-4">
        <Input />
      </div>
      <div className="border-t border-gray-200 w-full px-8 py-4 bg-sky-100">
        <div className="flex justify-between my-5">
          <h1 className="font-bold text-xl">Team Members</h1>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-3 rounded-lg w-30 ">
            Add a Member
          </button>
        </div>
        <TeamMembersData />
      </div>
    </>
  );
};

export default TeamMembers;
