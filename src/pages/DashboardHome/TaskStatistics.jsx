const TaskStatistics = () => {
  return (
    <div className="col-span-1 md:col-span-4 bg-white p-5 rounded-lg shadow">
      <h1 className="text-lg font-medium">Task Statistics</h1>
      {/* two stat cards */}
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="text-center py-3 bg-blue-50 rounded-lg shadow">
          <p className="text-xs">Total Tasks</p>
          <p className="font-bold text-lg">121</p>
        </div>
        <div className="text-center py-2 px-4 bg-blue-50 rounded shadow">
          <p className="text-xs">Total Tasks</p>
          <p className="font-bold text-lg">121</p>
        </div>
      </div>
      {/* progress bar */}
      <div className="mt-6">
        <div className="p-1 bg-blue-500 rounded-full" />
      </div>
      {/* progress list */}
      <div>
        <div className="flex items-center justify-between mt-4 text-green-500">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Completed Tasks</p>
          </div>
          <p className="text-sm">89</p>
        </div>
        <div className="flex items-center justify-between mt-4 text-blue-500">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Inprogress Tasks</p>
          </div>
          <p className="text-sm">56</p>
        </div>
        <div className="flex items-center justify-between mt-4 text-yellow-500">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">On Hold Tasks</p>
          </div>
          <p className="text-sm">26</p>
        </div>
        <div className="flex items-center justify-between mt-4 text-red-500">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Pending Tasks</p>
          </div>
          <p className="text-sm">36</p>
        </div>
        <div className="flex items-center justify-between mt-4 text-purple-500">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Review Tasks</p>
          </div>
          <p className="text-sm">12</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStatistics;
