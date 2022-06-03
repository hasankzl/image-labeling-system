import axios from "axios";
import Notification from "../../components/Notification";
import {
  GET_FRIENDS,
  GET_PROJECTS,
  GET_PROJECT_IMAGE_SETS,
} from "../../redux/actionTypes";
import {
  DELETE_PROJECT_URL,
  FIND_ALL_FRIENDS_URL,
  FIND_ALL_IMAGE_SET_URL,
  FIND_ALL_PROJECTS_URL,
  SAVE_PROJECT_URL,
  DOWNLOAD_JSON_URL,
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

export const deleteProject = (id) => async (dispatch) => {
  const status = await axios
    .delete(DELETE_PROJECT_URL + id)
    .then((res) => {
      if (res.status === 200) {
        Notification.success({ message: "Silme islemi basarili" });
      }
      return res.status;
    })
    .catch((err) => {
      Notification.error({ message: "Bir hata olustu" });
      return 404;
    });
  return status;
};

export const getMyImageSets = () => async (dispatch) => {
  await axios.get(FIND_ALL_IMAGE_SET_URL).then((res) => {
    dispatch({
      type: GET_PROJECT_IMAGE_SETS,
      payload: {
        data: res.data,
      },
    });
  });
};

export const downloadJson = async (id) => {
  await axios.get(DOWNLOAD_JSON_URL + id).then((res) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(JSON.stringify(res.data))
    );
    element.setAttribute("download", "json_veri.json");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  });
};
