import { Workspace24, Edit24, Delete24 } from "@carbon/icons-react";

import { Button } from "carbon-components-react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProjectModal from "./ProjectModal";
import { getAllProjects, deleteProject, downloadJson } from "./action";
import ReactFlexyTable from "react-flexy-table";
import { UnorderedList } from "carbon-components-react";
import { ListItem } from "carbon-components-react";
import { useNavigate } from "react-router-dom";
import { Json24 } from "@carbon/icons-react";
import { Xml24 } from "@carbon/icons-react";
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const Project = ({
  getAllProjects: _getAllProjects,
  projects,
  deleteProject: _deleteProject,
}) => {
  const [modal, setModal] = useState(false);
  let navigate = useNavigate();
  const handleDelete = (id) => {
    _deleteProject(id).then((res) => {
      if (res == 200) {
        _getAllProjects();
      }
    });
  };

  useEffect(() => {
    _getAllProjects();
  }, []);
  const columns = [
    {
      header: "Id",
      key: "id",
    },
    {
      header: "Proje adi",
      key: "name",
    },
    {
      header: "Yonetici",
      td: (data) => <span>{`${data.admin.name}  ${data.admin.surname}`}</span>,
    },
    {
      header: "Created Date",
      td: (data) => (
        <span>
          {new Date(data.createdDate).toLocaleDateString("TR", options)}
        </span>
      ),
    },
    {
      header: "kullanicilar",
      td: (data) => {
        return (
          <UnorderedList nested>
            {data.userList.map((user) => (
              <ListItem
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span> {`${user.name}  ${user.surname} `}</span>{" "}
              </ListItem>
            ))}
          </UnorderedList>
        );
      },
    },
    {
      header: "Etiket Turleri",
      td: (data) => {
        return (
          <UnorderedList nested>
            {data.labelTypeList.map((labelType) => (
              <ListItem
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span> {`${labelType.name} `}</span>{" "}
              </ListItem>
            ))}
          </UnorderedList>
        );
      },
    },
    {
      header: "Islemler",
      td: (data) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              hasIconOnly
              iconDescription="Projede Calis"
              onClick={() =>
                navigate("../workingProject/" + data.id, { replace: true })
              }
            >
              <Workspace24 />
            </Button>{" "}
            <Button
              hasIconOnly
              onClick={() => downloadJson(data.id, true)}
              iconDescription="Json Cikti"
            >
              <Json24 />
            </Button>
            <Button
              hasIconOnly
              onClick={() => downloadJson(data.id, false)}
              iconDescription="xml Çıktı"
            >
              <Xml24 />
            </Button>
            <Button
              hasIconOnly
              iconDescription="Proje Sil"
              onClick={() => handleDelete(data.id)}
            >
              <Delete24 />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ margin: 75, marginTop: 100 }}>
      <div style={{ display: "flex", justifyContent: "flex-end", margin: 20 }}>
        <Button onClick={() => setModal(true)}>Ekle</Button>
      </div>
      <div>
        <ReactFlexyTable
          data={projects}
          columns={columns}
          sortable
          globalSearch
          filterable
        />
      </div>
      <ProjectModal
        isOpen={modal}
        closeModal={() => setModal(false)}
        getAll={_getAllProjects}
      />
    </div>
  );
};

Project.propTypes = {};

const mapStateToProps = ({ projectReducer }) => ({
  projects: projectReducer.projects,
});

const mapDispatchToProps = { getAllProjects, deleteProject };

export default connect(mapStateToProps, mapDispatchToProps)(Project);
