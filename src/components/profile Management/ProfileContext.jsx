import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { profileContext } from "./ProfileContext";

import { initialState } from "./initialState";
import { profileReducers } from "../reducers/ProfileReducer";


export const useProfile = () => useContext(profileContext);

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducers, initialState);

  const value = { state, dispatch };

  return <profileContext.Provider value={value}>
    {children}
  </profileContext.Provider>;
};

