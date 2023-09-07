/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAddProjectMutation } from "../../features/projects/projectsApi";

const initialState = {
  title: "",
  description: "",
  deadline: "",
};

const AddProjectModal = ({ isChecked, setModalCheck }) => {
  const [projectData, setProjectData] = useState(initialState);
  const [addProject, { data }] = useAddProjectMutation();

  const handleChange = (e) => {
    const data = { ...projectData };
    data[e.target.name] = e.target.value;
    setProjectData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectData);
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
            <div className="mt-4">
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
              <button
                onClick={() => setModalCheck(!isChecked)}
                className="btn btn-sm"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProjectModal;
