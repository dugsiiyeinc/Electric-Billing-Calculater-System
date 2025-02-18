import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { profileContext } from "./ProfileContext";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { initialState } from "./initialState";


=======
>>>>>>> e846ba4 (movied the initial state into a different file)

export const initialState = {
    user:[],
}
<<<<<<< HEAD
=======
>>>>>>> 5cdd01514a9d21486e103f8e93e2c78ac30f9e00
>>>>>>> e846ba4 (movied the initial state into a different file)



export const useProfile = () => useContext(profileContext);

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const value = { state, dispatch };

  return <profileContext.Provider value={value}>
    {children}
  </profileContext.Provider>;
};

