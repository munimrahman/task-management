import { useState } from "react";
import TeamCard from "./TeamCard";
import TeamMembers from "./TeamMembers";
import { useGetTeamsQuery } from "../../features/teams/teamsApi";
import CreateTeamModal from "./CreateTeamModal";

const MyTeams = () => {
  const [modalCheck, setModalCheck] = useState(false);
  const { data: { teams = [] } = {} } = useGetTeamsQuery();

  // TODO: replace id
  const id = "64f23a10219063e8246e119d";
  const myTeams = teams.filter((team) => {
    return team.teamMembers.some((member) => member._id === id);
  });

  const allMembers = Array.from(
    new Set(
      teams.flatMap((team) => team.teamMembers.map((member) => member._id))
    )
  );

  const myTeamMembers = allMembers.map((id) =>
    teams
      .find((team) => team.teamMembers.some((member) => member._id === id))
      .teamMembers.find((member) => member._id === id)
  );

  return (
    <div className="min-h-screen p-5">
      <div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
        <h2 className="text-lg font-medium">My Teams</h2>
        <div className="flex">
          <button
            className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg flex gap-1 items-center"
            onClick={() => setModalCheck(!modalCheck)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Create Team
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {/* my teams */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 h-min">
          {myTeams.map((team, i) => (
            <TeamCard key={i} team={team} />
          ))}
        </div>
        {/* team members */}
        <div className="md:col-span-1">
          <TeamMembers members={myTeamMembers} myTeams={myTeams} />
        </div>
      </div>
      <CreateTeamModal isChecked={modalCheck} setModalCheck={setModalCheck} />
    </div>
  );
};

export default MyTeams;
