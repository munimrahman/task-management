import TeamCard from "./TeamCard";

const MyTeams = () => {
  return (
    <div className="min-h-screen p-5">
      <div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
        <h2 className="text-lg font-medium">My Teams</h2>
        <div className="flex">
          <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg flex gap-1 items-center">
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
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default MyTeams;
