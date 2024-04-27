import React, { useState } from "react";
import Input from "./Header/Input";
import { TeamMembersData } from "./TeamMembers/TeamMembersData.jsx";
import AddMember from "./TeamMembers/AddMember";
import { TeamMemberData } from "./TeamMembers/TeamMemberData.jsx";

const TeamMembers = () => {
  const [addMember, setAddMember] = useState(false);
  const [addAllMemberData, setAddAllMemberData] = useState(TeamMemberData);
  const handleData = (data) => {
    setAddAllMemberData((prevData) => {
      const newData = [data, ...prevData];
      return newData;
    });
    console.log(addAllMemberData);
    setAddMember(!addMember);
  };
  const handleAddMember = () => {
    setAddMember(!addMember);
  };

  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-1">
        <Input />
      </div>
      {addMember ? (
        <AddMember handleData={handleData} />
      ) : (
        <div className="border-t border-gray-200 w-full px-8 py-4 ">
          <div className="flex justify-between my-5">
            <h1 className="font-bold text-xl">Team Members</h1>
            <button
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-3 rounded-lg w-30 "
              onClick={handleAddMember}
            >
              Add a Member
            </button>
          </div>
          <TeamMembersData addAllMemberData={addAllMemberData} />
        </div>
      )}
    </>
  );
};

export default TeamMembers;
