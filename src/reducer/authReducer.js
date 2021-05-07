import { EDIT_USER, LOGIN, LOGOUT, SET_STATE_FROM_LOCAL, UPDATED_INFO } from "../constants";

let initialState = {
  token: null,
  expiration: null,
  user: null,
  userEdit: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        expiration: action.payload.expiration,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        expiration: null,
        user: null,
      };
    case SET_STATE_FROM_LOCAL:
      return {
        ...state,
        token: localStorage.getItem("token"),
        expiration: localStorage.getItem("expiration"),
        user: JSON.parse(localStorage.getItem("user")),
      };
    case EDIT_USER:
      return { ...state, userEdit: action.payload };
    case UPDATED_INFO:
      const newInfoUser = { ...state.user };
      if (newInfoUser.company) newInfoUser.company = { ...newInfoUser.company, ...action.payload };
      else newInfoUser.candidate = { ...newInfoUser.candidate, ...action.payload };
      localStorage.setItem("user", JSON.stringify(newInfoUser))
      return { ...state, user: newInfoUser };
    default:
      return state;
  }
};
