export const profileReducers = (state, action) => {
  const { type, payload } = action;
  const { users } = state;
  switch (type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...users, payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: users.map((user) => (user.id === payload.id ? payload : user)),
      };

    case "DELETE_USER":
      return {
        ...state,
        users: users.filter((userId) => userId !== payload),
      };

    default:
      return state;
  }
};
