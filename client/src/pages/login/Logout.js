import {
  HeaderGlobalAction,
  Modal,
  TextInput,
  Button,
} from "carbon-components-react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Logout20 } from "@carbon/icons-react";
import { logoutAction } from "./action";
const emptyUser = {
  username: "",
  password: "",
};

const Logout = ({ logoutAction: _logoutAction }) => {
  const logout = async () => {
    await _logoutAction();
  };

  return (
    <>
      <HeaderGlobalAction aria-label="logout" onClick={logout}>
        <Logout20 />
      </HeaderGlobalAction>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { logoutAction };

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
