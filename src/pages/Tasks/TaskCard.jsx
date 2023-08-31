const TaskCard = () => {
  return (
    <div className="bg-white p-5 rounded-lg mb-1 shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Navbar Design</h1>
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
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectr adiping elit. Accuss, reprehent.
        ccuss, reprehent.ccuss, reprehent.
      </p>
      {/* deadline priority */}
      <div className="flex justify-between mt-1 items-end">
        <div>
          <p className="text-sm font-medium">Due Date</p>
          <p className="text-sm text-gray-600">31 Aug, 2023</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">Priority</p>
          <span className="text-xs bg-red-600 text-white text-center rounded font-medium p-1">
            High
          </span>
        </div>
      </div>
      {/* assign to */}
      <div className="flex justify-between mt-1 items-end">
        <div>
          <p className="text-sm font-medium">Assign To</p>
          <p className="text-sm text-gray-600">Munim Rahman</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">Status</p>
          <span className="text-xs bg-red-200 text-red-600 text-center rounded font-medium p-1">
            Pending
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
