/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
import { useGetUserByEmailQuery } from "../../features/users/usersApi";
import {
  useEditTeamsMutation,
  useGetTeamsQuery,
} from "../../features/teams/teamsApi";

const AddMemberModal = ({
  isAddChecked,
  setAddModalCheck,
  teamMembers,
  teamId,
}) => {
  const [email, setEmail] = useState("");
  const alreadyInTeam = teamMembers?.find((member) => member.email === email);
  const { data: { user = {} } = {}, isLoading: userLoading } =
    useGetUserByEmailQuery(email);
  const [editTeam, { data, isLoading }] = useEditTeamsMutation();
  const { refetch } = useGetTeamsQuery();
  console.log(data);
  // TODO: replace id
  const id = "64f23a10219063e8246e119d";

  let resultContent = null;
  if (alreadyInTeam) {
    resultContent = (
      <p className="text-sm text-green-600 text-center mt-2">
        This user is already in the team!
      </p>
    );
  } else if (!user) {
    resultContent = (
      <p className="text-sm text-red-500 text-center mt-2">
        No user found, enter a valid user email
      </p>
    );
  } else if (user) {
    resultContent = (
      <div className="mt-5">
        <div className="flex gap-2 items-center mb-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user?.profilePhoto || avatar} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium">{user?.name}</h4>
            <p className="text-sm text-gray-500">
              {user?.designation || "Team Member"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userEmail: email,
      senderId: id,
      cacheData: user,
    };
    editTeam({ data, id: teamId });
    setAddModalCheck(!isAddChecked);
    setEmail("");
  };

  useEffect(() => {
    if (data?.team) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={isAddChecked}
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Add Team Member</h3>
          <div className="mt-5">
            <div className="mt-4">
              <label htmlFor="userEmail">User Email</label>
              <br />
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                placeholder="user@gmail.com"
                className="input input-bordered w-full mt-1 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {resultContent}
          <div className="modal-action">
            <button
              disabled={isLoading || userLoading || !user}
              onClick={handleSubmit}
              className={`btn btn-neutral btn-sm ${
                isLoading || (userLoading && "cursor-wait")
              }`}
            >
              Add Member
            </button>
            <button
              onClick={() => setAddModalCheck(!isAddChecked)}
              className="btn btn-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMemberModal;
