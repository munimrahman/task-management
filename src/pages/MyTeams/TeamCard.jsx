import avatar from "../../assets/avatar.png";

const TeamCard = () => {
  return (
    <div className="bg-white p-5 rounded-lg mb-1 shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Team Name</h1>
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
      <div className="mt-2">
        <div className="flex gap-2 items-center mb-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium">Munim Rahman</h4>
            <p className="text-sm text-gray-500">React Developer</p>
          </div>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium">Munim Rahman</h4>
            <p className="text-sm text-gray-500">React Developer</p>
          </div>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium">Munim Rahman</h4>
            <p className="text-sm text-gray-500">React Developer</p>
          </div>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium">Munim Rahman</h4>
            <p className="text-sm text-gray-500">React Developer</p>
          </div>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium">Munim Rahman</h4>
            <p className="text-sm text-gray-500">React Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
