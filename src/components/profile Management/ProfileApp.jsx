import { ProfileProvider } from "../context/ProfileContext";
import ProfileForm from "./ProfileForm";
import ProfileList from "./ProfileList";
import { useState } from "react";

const ProfileApp = () => {
  const [userToEdit, setUserToEdit] = useState(null);

  return (
    <ProfileProvider>
      <div className="max-w-2xl p-4 mx-auto">
        <h1 className="text-2xl font-bold text-center">User Management</h1>
        <ProfileForm userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
        <ProfileList setUserToEdit={setUserToEdit} />
      </div>
    </ProfileProvider>
  );
};

export default ProfileApp;
