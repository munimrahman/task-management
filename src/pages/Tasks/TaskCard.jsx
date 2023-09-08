/* eslint-disable react/prop-types */

import moment from "moment";
import EditTaskModal from "./EditTaskModal";
import { useEffect, useState } from "react";
import {
  useDeleteTasksMutation,
  useGetTasksQuery,
} from "../../features/task/taskApi";

const TaskCard = ({ task }) => {
  const [modalCheck, setModalCheck] = useState(false);
  const [deleteTasks, { data }] = useDeleteTasksMutation();
  const { refetch } = useGetTasksQuery();
  const {
    _id,
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

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <div className="bg-white p-5 rounded-lg mb-1 shadow">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-medium">{title}</h1>
          <span className="bg-blue-100 text-blue-500 text-sm px-1 rounded">
            {projectTitle}
          </span>
        </div>
        <div className="flex gap-1">
          <figure
            className="bg-green-200 rounded p-1 hover:cursor-pointer"
            onClick={() => setModalCheck(!modalCheck)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-green-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </figure>
          <figure
            className="bg-red-200 rounded p-1 hover:cursor-pointer"
            onClick={() => deleteTasks(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </figure>
        </div>
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
      <EditTaskModal
        task={task}
        isChecked={modalCheck}
        setModalCheck={setModalCheck}
      />
    </div>
  );
};

export default TaskCard;
