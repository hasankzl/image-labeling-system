import { Close24 } from "@carbon/icons-react";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { Form } from "carbon-components-react";
import { TextInput } from "carbon-components-react";
import { Select } from "carbon-components-react";
import { UnorderedList } from "carbon-components-react";
import { ListItem } from "carbon-components-react";
import { SelectItem } from "carbon-components-react";
import { Button } from "carbon-components-react";
import { Modal } from "carbon-components-react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllFriends, saveProject } from "./action";

const emptyProject = {
  name: "",
  admin: {},
  userList: [],
};

const ProjectModal = ({
  isOpen,
  closeModal,
  friendsList,
  getAllFriends: _getAllFriends,
  saveProject: _saveProject,
}) => {
  const [project, setProject] = useState(emptyProject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };
  const handleSelectClick = (e) => {
    if (e.target.value) {
      const data = JSON.parse(e.target.value);

      // eger daha once eklenmis ise bir sey yapma
      if (project.userList.some((user) => user.id == data.id)) {
        return;
      }
      const oldProject = { ...project };
      oldProject.userList.push(data);
      setProject(oldProject);
    }
  };

  const removeFromUserList = (id) => {
    const oldProject = { ...project };
    oldProject.userList = oldProject.userList.filter((user) => user.id != id);
    setProject(oldProject);
  };
  useEffect(() => {
    _getAllFriends();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    _saveProject(project).then((res) => {
      if (res == 200) {
        closeModal();
      }
    });
  };
  return (
    <Modal
      passiveModal
      open={isOpen}
      onRequestClose={() => closeModal()}
      modalHeading="Proje Olustur"
      size="xs"
    >
      <Form onSubmit={handleSubmit}>
        <TextInput
          labelText="Proje adi"
          placeholder="Proje adi"
          style={{ marginBottom: "1rem" }}
          value={project.name}
          name="name"
          onChange={handleChange}
        />

        <Select
          defaultValue="placeholder-item"
          helperText="Eklemek istediğiniz isimin üzerine tıklayınız"
          id="select-1"
          invalidText="Bu alan gereklidir"
          labelText="Proje çalışanlarını ekle"
          onChange={handleSelectClick}
        >
          <SelectItem text="bir isim seçin" />
          {friendsList.map((friend, index) => (
            <SelectItem
              key={index}
              text={`${friend.name} ${friend.surname}`}
              value={JSON.stringify(friend)}
            />
          ))}
        </Select>
        <UnorderedList style={{ margin: 30 }}>
          <ListItem>Projedeki kullanıcılar</ListItem>
          <UnorderedList nested>
            {project.userList.map((user) => (
              <ListItem
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span> {`${user.name}  ${user.surname} `}</span>{" "}
                <Close24 onClick={() => removeFromUserList(user.id)} />
              </ListItem>
            ))}
          </UnorderedList>
        </UnorderedList>
        <Button kind="primary" tabIndex={0} type="submit">
          Kaydet
        </Button>
      </Form>
    </Modal>
  );
};

const mapStateToProps = ({ projectReducer }) => ({
  friendsList: projectReducer.friends,
});

const mapDispatchToProps = { getAllFriends, saveProject };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
