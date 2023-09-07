/* eslint-disable react/prop-types */
import { useState } from "react";

const initialState = {
  title: "",
  priority: "",
  project: "",
  assignTo: "",
  deadline: "",
  description: "",
  status: "pending",
};

const AddTaskModal = ({ isChecked, setModalCheck }) => {
  const [taskData, setTaskData] = useState(initialState);

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
                <label className="text-sm" htmlFor="name">
                  Select Priority
                </label>
                <br />
                <select className="select select-sm select-bordered focus:outline-none w-full max-w-xs">
                  <option value={"Low"}>Low</option>
                  <option value={"Medium"}>Medium</option>
                  <option value={"High"}>High</option>
                </select>
              </div>
              <div>
                <label className="text-sm" htmlFor="name">
                  Select Project
                </label>
                <br />
                <select
                  className="select select-sm select-bordered focus:outline-none w-full max-w-xs"
                  required
                >
                  <option>Project One</option>
                  <option>Project Two</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm" htmlFor="name">
                  Assign To
                </label>
                <br />
                <select className="select select-sm select-bordered w-full max-w-xs">
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div>
                <label className="text-sm" htmlFor="deadline">
                  Deadline
                </label>
                <br />
                <input
                  type="date"
                  id="deadline"
                  className="input input-sm input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={""}
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
