import axios from "axios";
import Notification from "../../components/Notification";
import { REGISTER_URL } from "../../utils/constants";

export const saveUser = async (user) => {
  await axios
    .post(REGISTER_URL, user)
    .then((res) => {
      if (res.status === 200) {
        Notification.success("kayit basarili");
      }
    })
    .catch((err) => {
      Notification.error("bir hata olustu ");
    });
};
