/* eslint-disable react/prop-types */
import { useState } from "react";
import avatar from "../../assets/avatar.png";

const TeamMembers = ({ members, myTeams }) => {
  const [searchText, setSearchText] = useState("");
  const [filterByTeam, setFilterByTeam] = useState("");

  let myTeamMembers = members;
  if (filterByTeam) {
    myTeamMembers = myTeams?.find(
      (team) => team.name === filterByTeam
    ).teamMembers;
  }
  if (searchText) {
    myTeamMembers = members?.filter((member) =>
      member.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className="bg-white p-5 rounded-lg mb-1 shadow">
      <h1 className="font-medium p-1">All Team Members</h1>
      <div className="mt-2">
        <div className="grid grid-cols-2 gap-2 items-center mb-2">
          <div>
            <input
              type="text"
              placeholder="Search By Name"
              className="input input-sm input-bordered focus:outline-none  w-full max-w-xs"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div>
            <select
              className="select select-sm select-bordered focus:outline-none w-full"
              name="experience"
              value={filterByTeam}
              onChange={(e) => setFilterByTeam(e.target.value)}
            >
              <option value="">All Team</option>
              {myTeams?.map((team) => (
                <option key={team._id} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          {myTeamMembers?.map(({ _id, name, profilePhoto, designation }) => (
            <div key={_id} className="flex gap-2 items-center mb-2">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={profilePhoto || avatar} />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium">{name}</h4>
                <p className="text-sm text-gray-500">
                  {designation || "Team Member"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
