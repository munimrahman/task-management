/* eslint-disable react/prop-types */
import { useState } from "react";
import avatar from "../../assets/avatar.png";
import AddMemberModal from "./AddMemberModal";
import EditTeamModal from "./EditTeamModal";

const TeamCard = ({ team }) => {
  const { _id, name, teamMembers } = team || {};
  const [modalCheck, setModalCheck] = useState(false);
  const [addModalCheck, setAddModalCheck] = useState(false);

  return (
    <div className="bg-white p-5 rounded-lg mb-1 shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">{name}</h1>

        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
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
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max"
          >
            {/* <li>
              <span onClick={() => setModalCheck(!modalCheck)}>Edit Team</span>
            </li> */}
            <li>
              <span onClick={() => setAddModalCheck(!addModalCheck)}>
                Add Member
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-2">
        {teamMembers?.map(({ _id, name, profilePhoto, designation }) => (
          <div key={_id} className="flex gap-2 items-center mb-2">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={profilePhoto || avatar} />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium">{name}</h4>
              <p className="text-sm text-gray-500">
                {designation || "Team Member"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <EditTeamModal
        id={_id}
        isChecked={modalCheck}
        setModalCheck={setModalCheck}
      />
      <AddMemberModal
        isAddChecked={addModalCheck}
        setAddModalCheck={setAddModalCheck}
        teamMembers={teamMembers}
        teamId={_id}
      />
    </div>
  );
};

export default TeamCard;
