import axios from "axios";
import { LOGOUT_ACTION, LOGIN_ACTION } from "../../redux/actionTypes";
import { LOGIN_URL } from "../../utils/constants";
import notification from "../../components/Notification";
import i18n from "i18next";
export const loginAction = (data) => async (dispatch) => {
  const d = await axios
    .post(LOGIN_URL, data)
    .then((res) => {
      if (res.status === 200) {
        const { token } = res.headers;
        localStorage.setItem("token", token);
        //  localStorage.setItem("email", res.data.email);
        // you need to update here if you want to add new roles
        //  localStorage.setItem("role", res.data.role);
        dispatch({
          type: LOGIN_ACTION,
          payload: {
            email: res.data.email,
            role: res.data.role,
          },
        });
        notification.success({
          message: i18n.t("login.loginSuccessful"),
        });
        return res.status;
      } else if (res.status === 403) {
        notification.warning({
          message: i18n.t("login.loginDenied"),
        });
      }
    })
    .catch((err) => {
      console.log(err);
      notification.error({});
    });

  return d;
};

export const logoutAction = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
  dispatch({
    type: LOGOUT_ACTION,
  });
  notification.success({
    message: i18n.t("login.logoutSuccessful"),
  });
};
