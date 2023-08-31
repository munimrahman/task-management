const ProjectCard = () => {
  return (
    <div className="col-span-1 shadow p-5 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Social Media</h1>
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
      <div className="">
        <p className="text-sm text-gray-600">5 Task Open</p>
        <p className="text-sm text-gray-600">10 Task Completed</p>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium mb-">Project Description</p>
        <p className="text-sm text-gray-600 text-justify">
          Lorem ipsum dolor sit amet coctetur adipicing elit. Exerctionem, nulla
          nesiunt illo commodi quis praesentm ur magni libero iure.
        </p>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium">Project Deadline</p>
        <p className="text-sm text-gray-600">31 Dec, 2023</p>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium">Progress</p>
        <div className="flex items-center justify-between">
          <progress className="progress w-9/12" value="40" max="100"></progress>
          <span className="text-sm text-gray-600">45%</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
