import axios from "axios";
import Notification from "../../components/Notification";
import { GET_FRIENDS, GET_PROJECTS } from "../../redux/actionTypes";
import {
  FIND_ALL_FRIENDS_URL,
  FIND_ALL_PROJECTS_URL,
  SAVE_PROJECT_URL,
} from "../../utils/constants";

export const getAllFriends = () => async (dispatch) => {
  await axios.get(FIND_ALL_FRIENDS_URL).then((res) => {
    dispatch({
      type: GET_FRIENDS,
      payload: {
        data: res.data,
      },
    });
  });
};

export const saveProject = (project) => async (dispatch) => {
  const status = await axios.post(SAVE_PROJECT_URL, project).then((res) => {
    if (res.status === 200) {
      Notification.success({ message: "kayit basarili" });
    }

    return res.status;
  });
  return status;
};

export const getAllProjects = () => async (dispatch) => {
  await axios.get(FIND_ALL_PROJECTS_URL).then((res) => {
    dispatch({
      type: GET_PROJECTS,
      payload: {
        data: res.data,
      },
    });
  });
};
