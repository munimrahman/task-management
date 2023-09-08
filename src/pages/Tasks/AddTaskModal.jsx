/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import { useGetTeamsQuery } from "../../features/teams/teamsApi";

const initialState = {
  title: "",
  priority: "",
  project: "",
  assignTo: "",
  dueDate: "",
  description: "",
  status: "pending",
};

const AddTaskModal = ({ isChecked, setModalCheck }) => {
  const [taskData, setTaskData] = useState(initialState);
  const { data: { projects = [] } = {} } = useGetProjectsQuery();

  // TODO: replace id
  const targetTeamMemberId = "64f23a10219063e8246e119d";
  // const { data: { teams = [] } = {} } = useGetTeamsQuery();

  const myProjects = projects.filter((project) => {
    if (
      project.assignedTeam &&
      project.assignedTeam.teamMembers.includes(targetTeamMemberId)
    ) {
      return true;
    }
    return false;
  });

  // find team members
  const { data: { teams = [] } = {} } = useGetTeamsQuery();

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

  const handleChange = (e) => {
    const data = { ...taskData };
    data[e.target.name] = e.target.value;
    setTaskData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setModalCheck(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={isChecked}
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Create Task</h3>
          <form className="my-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm" htmlFor="title">
                Task Name
              </label>{" "}
              <br />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Task Design"
                className="input input-sm input-bordered w-full mt-1 focus:outline-none"
                value={taskData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm" htmlFor="priority">
                  Select Priority
                </label>
                <br />
                <select
                  className="select select-sm select-bordered focus:outline-none w-full max-w-xs"
                  name="priority"
                  value={taskData.priority}
                  onChange={handleChange}
                  required
                >
                  <option value={"Low"}>Low</option>
                  <option value={"Medium"}>Medium</option>
                  <option value={"High"}>High</option>
                </select>
              </div>
              <div>
                <label className="text-sm" htmlFor="project">
                  Select Project
                </label>
                <br />
                <select
                  className="select select-sm select-bordered focus:outline-none w-full max-w-xs"
                  required
                  name="project"
                  value={taskData.project}
                  onChange={handleChange}
                >
                  {myProjects?.map(({ _id, title }) => (
                    <option key={_id} value={_id}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm" htmlFor="assignTo">
                  Assign To
                </label>
                <br />
                <select
                  className="select select-sm select-bordered focus:outline-none w-full max-w-xs"
                  name="assignTo"
                  value={taskData.assignTo}
                  onChange={handleChange}
                >
                  {myTeamMembers?.map(({ _id, name }) => (
                    <option key={_id} value={_id}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm" htmlFor="dueDate">
                  Deadline
                </label>
                <br />
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  className="input input-sm input-bordered w-full max-w-xs focus:outline-none"
                  value={taskData.dueDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-1">
              <label className="text-sm" htmlFor="description">
                Project Description
              </label>
              <br />
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Project Description"
                value={taskData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modal-action">
              <button className="btn btn-neutral btn-sm">Save</button>
              <span
                onClick={() => setModalCheck(!isChecked)}
                className="btn btn-sm"
              >
                Close
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
