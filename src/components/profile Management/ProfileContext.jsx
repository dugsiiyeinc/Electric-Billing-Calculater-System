import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { profileContext } from "./ProfileContext";

import { initialState } from "./initialState";


export const useProfile = () => useContext(profileContext);

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const value = { state, dispatch };

  return <profileContext.Provider value={value}>
    {children}
  </profileContext.Provider>;
};

