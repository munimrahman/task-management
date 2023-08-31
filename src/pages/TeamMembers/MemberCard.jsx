import avatar from "../../assets/avatar.png";

const MemberCard = () => {
  return (
    <div className="col-span-1 shadow p-5 bg-white rounded-lg text-center">
      <div className="avatar">
        <div className="w-24">
          <img src={avatar} />
        </div>
      </div>
      <div className="mt-1">
        <h3 className="font-bold">MD Munim Rahman</h3>
        <p className="text-sm text-gray-500">React Developer</p>
      </div>
      <div className="divider my-2" />
      <div className="flex gap-2 justify-around flex-wrap">
        <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Assign Task
        </button>
        <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg flex gap-1 items-center">
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
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
