import {
  HeaderGlobalAction,
  Modal,
  TextInput,
  Button,
} from "carbon-components-react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Login20 } from "@carbon/icons-react";
import { loginAction } from "./action";
const emptyUser = {
  username: "",
  password: "",
};

const Login = ({ loginAction: _loginAction }) => {
  const [modalState, setModalState] = useState(false);
  const [user, setUser] = useState(emptyUser);
  const login = async () => {
    await _loginAction(user).then((status) => {
      if (status == 200) {
        setModalState(false);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <HeaderGlobalAction
        aria-label="login"
        onClick={() => setModalState(!modalState)}
      >
        <Login20 />
      </HeaderGlobalAction>
      <Modal
        size="xs"
        open={modalState}
        onRequestClose={() => setModalState(!modalState)}
        modalHeading="login"
        passiveModal
      >
        <TextInput
          labelText="kullanici adi"
          placeholder="kullanici adi"
          style={{ marginBottom: "1rem" }}
          value={user.username}
          name="username"
          onChange={handleChange}
        />
        <TextInput
          labelText="sifre"
          type="password"
          style={{ marginBottom: "1rem" }}
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <Button kind="primary" tabIndex={0} type="submit" onClick={login}>
          Login
        </Button>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { loginAction };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
