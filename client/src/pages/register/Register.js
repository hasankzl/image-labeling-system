import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  HeaderGlobalAction,
  Modal,
  TextInput,
} from "carbon-components-react";
import { saveUser } from "./action";
import Notification from "../../components/Notification";
import { RequestQuote20 } from "@carbon/icons-react";

const emptyUser = {
  username: "",
  name: "",
  surname: "",
  email: "",
  password: "",
};
export const Register = (props) => {
  const [modalState, setModalState] = useState(false);
  const [user, setUser] = useState(emptyUser);
  const [secondPassword, setSecondPassword] = useState("");
  useEffect(() => {
    setUser(emptyUser);
  }, [modalState]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === secondPassword) {
      saveUser(user);
    } else {
      Notification.warning("sifreler esit degil");
    }
  };
  return (
    <>
      <HeaderGlobalAction
        aria-label="Search"
        onClick={() => setModalState(!modalState)}
      >
        <RequestQuote20 />
      </HeaderGlobalAction>
      <Modal
        passiveModal
        open={modalState}
        onRequestClose={() => setModalState(!modalState)}
        modalHeading="Kayit"
        size="xs"
      >
        <Form onSubmit={handleSubmit}>
          <TextInput
            labelText="kullanici adi"
            placeholder="kullanici adi"
            style={{ marginBottom: "1rem" }}
            value={user.username}
            name="username"
            onChange={handleChange}
          />
          <TextInput
            labelText="email"
            placeholder="email"
            type="email"
            style={{ marginBottom: "1rem" }}
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          <TextInput
            labelText="isim"
            placeholder="isim"
            style={{ marginBottom: "1rem" }}
            value={user.name}
            name="name"
            onChange={handleChange}
          />
          <TextInput
            labelText="soyad"
            placeholder="soyad"
            style={{ marginBottom: "1rem" }}
            value={user.surname}
            name="surname"
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
          <TextInput
            labelText="tekrar sifre"
            type="password"
            style={{ marginBottom: "1rem" }}
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
          />
          <Button kind="primary" tabIndex={0} type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
