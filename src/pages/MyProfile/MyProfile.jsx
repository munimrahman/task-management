import { useState } from "react";
import avatar from "../../assets/avatar.png";

const MyProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [dob, setDob] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      full_name: firstName + " " + lastName,
      birth_date: dob,
      gender: editGender,
      email: editEmail,
      phone: editPhone,
      cover_letter: bio,
    };
    console.log(updatedData);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* info section */}
        <div className="md:col-span-4 bg-white rounded-lg px-5 py-8 h-min">
          <figure className="flex justify-center">
            <img src={avatar} alt="" className="w-36" />
          </figure>
          <h2 className="text-center my-3 text-xl font-bold">Munim Rahman</h2>
          <h3 className="">About</h3>
          <p className="text-[#999999] text-sm text-justify">
            Update Your Cover Letter
          </p>
          <div className="flex justify-between my-3">
            <div>
              <p>Age</p>
              <p className="text-[#999999] text-sm">Update Your Birth Date</p>
            </div>
            <div>
              <p>Gender</p>
              <p className="text-[#999999] text-sm">Not Updated</p>
            </div>
          </div>
          <p>Date Of Birth</p>
          <p className="text-[#999999] text-sm">Update Your Birth Date</p>
        </div>
        {/* update section */}
        <div className="md:col-span-8 bg-white rounded-lg p-5">
          <h2 className="text-2xl font-medium">Personal Information</h2>
          <form className="my-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label> <br />
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="dob">Date Of Birth</label>
                <br />
                <input
                  type="date"
                  id="dob"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <br />
                <select
                  id="gender"
                  className="select select-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={editGender}
                  onChange={(e) => setEditGender(e.target.value)}
                >
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                className="input input-bordered w-full mt-1 focus:outline-none"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full mt-1 focus:outline-none"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="bio">About Me</label>
              <br />
              <textarea
                id="bio"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Write Your Comment . . ."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={`bg-[#4C6FFF] text-white w-24 px-3 py-2 rounded-md cursor-pointer mt-2`}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
