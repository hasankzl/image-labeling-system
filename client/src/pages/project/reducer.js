import {
  GET_FRIENDS,
  GET_PROJECTS,
  GET_PROJECT_IMAGE_SETS,
} from "../../redux/actionTypes";

const initialState = {
  friends: [],
  projects: [],
  imageSets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: action.payload.data };
    case GET_PROJECTS:
      return { ...state, projects: action.payload.data };
    case GET_PROJECT_IMAGE_SETS:
      return { ...state, imageSets: action.payload.data };
    default:
      return state;
  }
};
