import React from "react";
import { useProfiles } from "../hooks/useProfiles";

const ProfileItem = ({ user, setUserEdit }) => {
  const { deleteUser } = useProfiles();

  const { avatar, name, email, phone, id } = user;

  

  return (
    <div className="p-4 border rounded shadow-md">
      <img src={avatar} alt={name} className="size-16 rounded-full" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-lg font-semibold">{email}</p>
      <p className="text-md font-medium">{phone}</p>
      <button
        onClick={() => setUserEdit(user)}
        className="px-2 py-1 text-white bg-yellow-500 rounded"
      >
        Edit
      </button>
      <button
        onClick={()=> deleteUser(id)} 
        className="px-2 py-1 text-white bg-red-500 rounded ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfileItem;