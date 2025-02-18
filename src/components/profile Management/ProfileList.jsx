import React from "react";
import { useProfiles } from "../hooks/useProfiles";
import ProfileItem from "./ProfileItem";

const ProfileList = ({setUserEdit}) => {
    const {users} = useProfiles();
  return <div className="grid gap-4 md:grid-cols-2">
    {
        users.map((user)=>(
            <ProfileItem key={user.id} user={user} setUserEdit={setUserEdit}/>
        ))
    }
  </div>;
};

export default ProfileList;
