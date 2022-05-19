import { GET_FRIENDS, GET_PROJECTS } from "../../redux/actionTypes";

const initialState = {
  friends: [],
  projects: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: action.payload.data };
    case GET_PROJECTS:
      return { ...state, projects: action.payload.data };
    default:
      return state;
  }
};
