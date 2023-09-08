import { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import { useGetTasksQuery } from "../../features/task/taskApi";

const Tasks = () => {
  const [modalCheck, setModalCheck] = useState(false);
  const { data: { projects = [] } = {} } = useGetProjectsQuery();
  const { data: { tasks = [] } = {} } = useGetTasksQuery();
  // TODO: replace id
  const targetTeamMemberId = "64f23a10219063e8246e119d";

  const myProjects = projects.filter((project) => {
    if (
      project.assignedTeam &&
      project.assignedTeam.teamMembers.includes(targetTeamMemberId)
    ) {
      return true;
    }
    return false;
  });

  // get my team tasks
  const myTeamTasks = tasks.filter((task) => {
    for (const el of myProjects) {
      if (el._id === task.project._id) return true;
    }
    return false;
  });

  const pending = myTeamTasks.filter((t) => t.status === "pending");
  const inProgress = myTeamTasks.filter((t) => t.status === "in-progress");
  const completed = myTeamTasks.filter((t) => t.status === "completed");

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
          {pending.map((task) => (
            <TaskCard key={task._id} task={task} from={"pending"} />
          ))}
        </div>
        {/* In Progress Tasks */}
        <div className="col-span-1">
          <h3 className="font-medium mb-1 py-2 text-center bg-blue-200 text-blue-600 rounded-lg">
            In Progress
          </h3>
          {inProgress.map((task) => (
            <TaskCard key={task._id} task={task} from={"in-progress"} />
          ))}
        </div>
        {/* Completed Tasks */}
        <div className="col-span-1">
          <h3 className="font-medium mb-1 py-2 text-center bg-green-200 text-green-600 rounded-lg">
            Completed
          </h3>
          {completed.map((task) => (
            <TaskCard key={task._id} task={task} from={"completed"} />
          ))}
        </div>
      </div>
      <AddTaskModal isChecked={modalCheck} setModalCheck={setModalCheck} />
    </div>
  );
};

export default Tasks;
