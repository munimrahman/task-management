import { useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
import {
  useEditUserMutation,
  useGetUserQuery,
} from "../../features/users/usersApi";

const MyProfile = () => {
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDesignation, setEditDesignation] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  // TODO: replace id
  const id = "64f23a10219063e8246e119d";
  const {
    data: { user: { name, email, profilePhoto, about, designation } = {} } = {},
  } = useGetUserQuery(id);

  const [editUser, { data, isLoading }] = useEditUserMutation();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (name) setEditName(name);
    if (email) setEditEmail(email);
    if (designation) setEditDesignation(designation);
    if (about) setBio(about);
  }, [name, email, about, designation]);

  const imageHostKey = "d813c7643bdd7e54cf105fb37f5f3f78";
  const handleSubmit = (e) => {
    e.preventDefault();
    // upload image to image bb
    if (imageFile) {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", imageFile);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const updatedData = {
              name: editName,
              designation: editDesignation,
              email: editEmail,
              profilePhoto: imgData.data.url,
              about: bio,
            };
            setLoading(false);
            // save data to database
            editUser({ id, data: updatedData });
            setImageFile(null);
          }
        });
    } else {
      const updatedData = {
        name: editName,
        designation: editDesignation,
        email: editEmail,
        about: bio,
      };
      //   save info to database
      editUser({ id, data: updatedData });
    }
  };

  return (
    <div className="min-h-screen p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* info section */}
        <div className="md:col-span-4 bg-white rounded-lg px-5 py-8 h-min">
          <figure className="flex justify-center">
            <img src={profilePhoto || avatar} alt="" className="w-36" />
          </figure>
          <div className="my-3 text-center">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm text-gray-500">
              {designation || "Update Your Designation"}
            </p>
          </div>

          <h3 className="">Bio</h3>
          <p className="text-[#999999] text-sm text-justify">
            {about || "Update Your Bio"}
          </p>

          <div>
            <p>Email</p>
            <p className="text-[#999999] text-sm">
              {email || "Update Your Email"}
            </p>
          </div>
        </div>
        {/* update section */}
        <div className="md:col-span-8 bg-white rounded-lg p-5">
          <h2 className="text-2xl font-medium">Edit Personal Information</h2>
          <form className="my-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="designation">Designation</label>
                <br />
                <input
                  type="text"
                  id="designation"
                  placeholder="React Developer"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={editDesignation}
                  onChange={(e) => setEditDesignation(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                placeholder="demo@gmail.com"
                className="input input-bordered w-full mt-1 focus:outline-none"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Profile Photo</label>
              <br />
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={onImageChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="bio">Bio</label>
              <br />
              <textarea
                id="bio"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Bio"
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
