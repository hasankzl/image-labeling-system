import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../pages/login/reducer";
export default configureStore({
  reducer: { loginReducer },
});
