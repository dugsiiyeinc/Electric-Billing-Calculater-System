import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

import { initialState } from "../profile Management/initialState.js";
import { profileReducers } from "../reducers/ProfileReducer.jsx";

export const useProfile = () => useContext(ProfileContext);

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducers, initialState);

  const value = { state, dispatch };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
