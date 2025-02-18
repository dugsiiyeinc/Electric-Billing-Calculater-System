import { useState, useEffect } from "react";

import { useProfiles } from "../hooks/useProfiles";

const userData = {
  name: "",
  email: "",
  phone: "",
  avatar: "",
};

const ProfileForm = ({ userToEdit, setUserToEdit }) => {
  const { addUser, updateUser } = useProfiles();
  const [formData, setFormData] = useState(userData);

  useEffect(() => {
    if (userToEdit) setFormData(userData);
  }, [userToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userToEdit) {
      updateUser(formData);
      setUserToEdit(null);
    } else {
      addUser({ ...formData, id: Date.now() });
    }
    setFormData({ name: "", email: "", phone: "", avatar: "" });
  };

  const {name, email, phone, avatar} = formData;

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
        className="block w-full p-2 mb-2 border"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        className="block w-full p-2 mb-2 border"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
        className="block w-full p-2 mb-2 border"
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(event) => setFormData({ ...formData, avatar: event.target.value })}
        className="block w-full p-2 mb-2 border"
      />
      <button className="px-4 py-2 text-white bg-blue-500 rounded">
        {userToEdit ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default ProfileForm;