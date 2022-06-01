import axios from "axios";
import Notification from "../../components/Notification";
import {
  GET_FRIENDS,
  GET_IMAGE_SETS,
  GET_PROJECTS,
} from "../../redux/actionTypes";
import {
  DELETE_IMAGE_SET_URL,
  DELETE_PROJECT_URL,
  FIND_ALL_FRIENDS_URL,
  FIND_ALL_IMAGE_SET_URL,
  FIND_ALL_PROJECTS_URL,
  SAVE_IMAGE_SET_URL,
  SAVE_PROJECT_URL,
} from "../../utils/constants";

export const getAllImageSet = () => async (dispatch) => {
  await axios.get(FIND_ALL_IMAGE_SET_URL).then((res) => {
    dispatch({
      type: GET_IMAGE_SETS,
      payload: {
        data: res.data,
      },
    });
  });
};

export const saveImageSet = (imageSet, images) => async (dispatch) => {
  const formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append(`files`, images[i]);
  }
  formData.append("imageSet", imageSet.name);
  const status = await axios({
    method: "post",
    url: SAVE_IMAGE_SET_URL,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    if (res.status === 200) {
      Notification.success({ message: "kayit basarili" });
    }

    return res.status;
  });
  return status;
};

export const deleteImageSet = (id) => async (dispatch) => {
  const status = await axios
    .delete(DELETE_IMAGE_SET_URL + id)
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
