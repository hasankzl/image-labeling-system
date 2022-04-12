import React from "react";
import { connect } from "react-redux";
import { Search20, Notification20, AppSwitcher20 } from "@carbon/icons-react";
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
} from "carbon-components-react";
import Login from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import Logout from "../pages/login/Logout";

export const AppBar = ({ isLogin }) => {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        {isLogin ? (
          <Logout />
        ) : (
          <>
            <Login />
            <Register />
          </>
        )}
        <HeaderGlobalAction aria-label="Notifications">
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  isLogin: loginReducer.isLogin,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
