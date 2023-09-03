/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useGetTeamQuery } from "../../features/teams/teamsApi";

const EditTeamModal = ({ id, isChecked, setModalCheck }) => {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const { data: { team } = {} } = useGetTeamQuery(id);

  useEffect(() => {
    if (team?.name) setTeamName(team.name);
    if (team?.description) setTeamName(team.description);
  }, [team]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamData = {
      name: teamName,
      description: teamDescription,
    };
    console.log(teamData);
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
          <h3 className="font-bold text-lg text-center">Edit Team Info</h3>
          <form className="my-5">
            <div className="mt-4">
              <label htmlFor="teamName">Team Name</label>
              <br />
              <input
                type="text"
                id="teamName"
                name="teamName"
                placeholder="Team Name"
                className="input input-bordered w-full mt-1 focus:outline-none"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="description">Team Description</label>
              <br />
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Team Description"
                value={teamDescription}
                onChange={(e) => setTeamDescription(e.target.value)}
              />
            </div>
          </form>

          <div className="modal-action">
            <button onClick={handleSubmit} className="btn btn-neutral btn-sm">
              Edit
            </button>
            <button
              onClick={() => setModalCheck(!isChecked)}
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

export default EditTeamModal;
