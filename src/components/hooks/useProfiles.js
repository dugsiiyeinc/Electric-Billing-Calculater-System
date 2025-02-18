import { useProfile } from "../profile Management/ProfileContext";

export const useProfiles = () => {
  const { state, dispatch } = useProfile();

  const addUser = (user) => dispatch({ type: "ADD_USER", payload: user });

  const updateUser = (user) => ({ type: "UPDATE_USER", payload: user });

  const deleteUser = (id) => ({ type: "DELETE_USER", payload: id });

  return {users:state.users, addUser, updateUser, deleteUser}
};
