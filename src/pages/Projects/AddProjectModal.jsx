/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  useAddProjectMutation,
  useGetProjectsQuery,
} from "../../features/projects/projectsApi";
import { useGetTeamsQuery } from "../../features/teams/teamsApi";

const initialState = {
  title: "",
  description: "",
  deadline: "",
  assignedTeam: "",
};

const AddProjectModal = ({ isChecked, setModalCheck }) => {
  const [projectData, setProjectData] = useState(initialState);
  const { data: { teams = [] } = {} } = useGetTeamsQuery();
  const { refetch } = useGetProjectsQuery();

  // TODO: replace id
  const id = "64f23a10219063e8246e119d";
  const myTeams = teams.filter((team) => {
    return team.teamMembers.some((member) => member._id === id);
  });

  const [addProject, { data }] = useAddProjectMutation();

  const handleChange = (e) => {
    const data = { ...projectData };
    data[e.target.name] = e.target.value;
    setProjectData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(projectData);
    setModalCheck(!isChecked);
  };

  useEffect(() => {
    if (data?.project) {
      refetch();
    }
  }, [data, refetch]);

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
          <h3 className="font-bold text-lg text-center">Add Project</h3>
          <form className="my-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Project Title</label> <br />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full mt-1 focus:outline-none"
                value={projectData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="" htmlFor="name">
                  Assign To
                </label>
                <br />
                <select
                  className="select select-bordered focus:outline-none w-full max-w-xs"
                  name="assignedTeam"
                  value={projectData.assignedTeam}
                  onChange={handleChange}
                >
                  {myTeams?.map(({ _id, name }) => (
                    <option key={_id} value={_id}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="deadline">Project Deadline</label> <br />
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  placeholder="deadline"
                  className="input input-bordered w-full mt-1 focus:outline-none"
                  value={projectData.deadline}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-2">
              <label htmlFor="description">Project Description</label>
              <br />
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Team Description"
                value={projectData.description}
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

export default AddProjectModal;
