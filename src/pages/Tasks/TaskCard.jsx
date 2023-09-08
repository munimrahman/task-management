/* eslint-disable react/prop-types */

import moment from "moment";

const TaskCard = ({ task, from }) => {
  const {
    title,
    description,
    dueDate,
    status,
    priority,
    assignTo: { name } = {},
    project: { title: projectTitle } = {},
  } = task || {};

  let priorityContent = null;
  if (priority === "Low") {
    priorityContent = (
      <span className="text-xs bg-green-600 text-white text-center rounded font-medium p-1">
        {priority}
      </span>
    );
  } else if (priority === "Medium") {
    priorityContent = (
      <span className="text-xs bg-blue-600 text-white text-center rounded font-medium p-1">
        {priority}
      </span>
    );
  } else {
    priorityContent = (
      <span className="text-xs bg-red-600 text-white text-center rounded font-medium p-1">
        {priority}
      </span>
    );
  }

  let statusContent = null;
  if (status === "pending") {
    statusContent = (
      <span className="text-xs bg-red-200 text-red-600 text-center rounded font-medium p-1">
        {status}
      </span>
    );
  } else if (status === "in-progress") {
    statusContent = (
      <span className="text-xs bg-blue-200 text-blue-600 text-center rounded font-medium p-1">
        {status}
      </span>
    );
  } else {
    statusContent = (
      <span className="text-xs bg-green-200 text-green-600 text-center rounded font-medium p-1">
        {status}
      </span>
    );
  }

  return (
    <div className="bg-white p-5 rounded-lg mb-1 shadow">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-medium">{title}</h1>
          <span className="bg-blue-100 text-blue-500 text-sm px-1 rounded">
            {projectTitle}
          </span>
        </div>
        <figure className="hover:bg-gray-200 rounded-full p-1 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </figure>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      {/* deadline priority */}
      <div className="flex justify-between mt-1 items-end">
        <div>
          <p className="text-sm font-medium">Due Date</p>
          <p className="text-sm text-gray-600">
            {moment(dueDate).format("ll")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">Priority</p>
          {priorityContent}
        </div>
      </div>
      {/* assign to */}
      <div className="flex justify-between mt-1 items-end">
        <div>
          <p className="text-sm font-medium">Assign To</p>
          <p className="text-sm text-gray-600">{name}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">Status</p>
          {statusContent}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
