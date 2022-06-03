import { Close24, Add24 } from "@carbon/icons-react";
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
import { getAllFriends, saveProject, getMyImageSets } from "./action";
const emptyProject = {
  name: "",
  admin: {},
  userList: [],
  imageSet: {},
  labelTypeList: [],
};

const ProjectModal = ({
  isOpen,
  closeModal,
  friendsList,
  imageSets,
  getAllFriends: _getAllFriends,
  saveProject: _saveProject,
  getMyImageSets: _getMyImageSets,
  getAll,
}) => {
  const [project, setProject] = useState(emptyProject);
  const [labelTypeName, setLabelTypeName] = useState("");
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

  const addLabelType = () => {
    if (labelTypeName != "") {
      // eger daha once eklenmis ise bir sey yapma
      if (
        project.labelTypeList.some(
          (labelType) => labelType.name == labelTypeName
        )
      ) {
        return;
      }
      const data = {
        name: labelTypeName,
      };
      const oldProject = { ...project };
      oldProject.labelTypeList.push(data);
      setProject(oldProject);
      setLabelTypeName("");
    }
  };

  const removeFromLabelTypeList = (name) => {
    const oldProject = { ...project };
    oldProject.labelTypeList = oldProject.labelTypeList.filter(
      (labelType) => labelType.name != name
    );
    setProject(oldProject);
  };
  const handleImageSetSelect = (e) => {
    if (e.target.value) {
      const data = JSON.parse(e.target.value);

      const oldProject = { ...project, imageSet: { id: data.id } };

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
    _getMyImageSets();
  }, []);

  useEffect(() => {
    setProject(emptyProject);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    _saveProject(project).then((res) => {
      if (res == 200) {
        closeModal();
        getAll();
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
          labelText="Bir resim seti seciniz"
          id="select-1"
          invalidText="Bu alan gereklidir"
          onChange={handleImageSetSelect}
          style={{ marginBottom: 30 }}
        >
          <SelectItem text="bir isim seçin" />
          {imageSets.map((imageSet, index) => (
            <SelectItem
              key={index}
              text={`${imageSet.name}`}
              value={JSON.stringify(imageSet)}
            />
          ))}
        </Select>
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

        <div style={{ marginBottom: "1rem", display: "flex" }}>
          <TextInput
            labelText="Etiket turu ekle"
            placeholder="Etiket adi"
            value={labelTypeName}
            name="name"
            onChange={(e) => setLabelTypeName(e.target.value)}
          />
          <Button label="Add" onClick={addLabelType}>
            <Add24 />
          </Button>
        </div>

        <UnorderedList style={{ margin: 30 }}>
          <ListItem>Projedeki Etiketler</ListItem>
          <UnorderedList nested>
            {project.labelTypeList.map((labelType) => (
              <ListItem
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span> {`${labelType.name}  `}</span>{" "}
                <Close24
                  onClick={() => removeFromLabelTypeList(labelType.name)}
                />
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
  imageSets: projectReducer.imageSets,
});

const mapDispatchToProps = { getAllFriends, saveProject, getMyImageSets };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
