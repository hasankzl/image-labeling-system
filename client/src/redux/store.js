import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../pages/login/reducer";
import projectReducer from "../pages/project/reducer";
export default configureStore({
  reducer: { loginReducer, projectReducer },
});
