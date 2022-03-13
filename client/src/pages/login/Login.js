import { HeaderGlobalAction, Modal, TextInput } from "carbon-components-react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Login20 } from "@carbon/icons-react";
export const Login = (props) => {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <HeaderGlobalAction
        aria-label="Search"
        onClick={() => setModalState(!modalState)}
      >
        <Login20 />
      </HeaderGlobalAction>
      <Modal
        size="xs"
        open={modalState}
        onRequestClose={() => setModalState(!modalState)}
        modalHeading="login"
        primaryButtonText="login"
        secondaryButtonText="cancel"
      >
        <TextInput
          labelText="kullanici adi"
          placeholder="kullanici adi"
          style={{ marginBottom: "1rem" }}
        />
        <TextInput
          labelText="sifre"
          type="password"
          style={{ marginBottom: "1rem" }}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
