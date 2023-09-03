import TaskCard from "./TaskCard";

const Tasks = () => {
  return (
    <div className="min-h-screen p-5">
      <div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
        <h2 className="text-lg font-medium">All Tasks</h2>
        <div className="flex">
          <div className="hidden sm:flex border rounded px-3 mx-1 items-center">
            <span className="text-gray-500 text-sm">Sort By:</span>
            <select
              name=""
              id=""
              className="bg-white focus:outline-none text-sm hover:cursor-pointer"
            >
              <option disabled selected>
                Default
              </option>
              <option value="-createdAt">Newest Task</option>
              <option value="salary">Priority Low-High</option>
              <option value="-salary">Priority High-Low</option>
            </select>
          </div>
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
            Create Task
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {/* Pending Tasks */}
        <div className="col-span-1">
          <h3 className="font-medium mb-1 py-2 text-center bg-red-200 text-red-600 rounded-lg">
            Pending
          </h3>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        {/* In Progress Tasks */}
        <div className="col-span-1">
          <h3 className="font-medium mb-1 py-2 text-center bg-blue-200 text-blue-600 rounded-lg">
            In Progress
          </h3>
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        {/* Completed Tasks */}
        <div className="col-span-1">
          <h3 className="font-medium mb-1 py-2 text-center bg-green-200 text-green-600 rounded-lg">
            Completed
          </h3>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
