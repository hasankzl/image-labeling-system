import { GET_IMAGE_SETS } from "../../redux/actionTypes";

const initialState = {
  imageSets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_SETS:
      return { ...state, imageSets: action.payload.data };
    default:
      return state;
  }
};
