import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../pages/login/reducer";
import projectReducer from "../pages/project/reducer";
import imageSetReducer from "../pages/imageset/reducer";
export default configureStore({
  reducer: { loginReducer, projectReducer, imageSetReducer },
});
