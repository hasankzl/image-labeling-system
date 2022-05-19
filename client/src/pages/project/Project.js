import { TableContainer } from "carbon-components-react";
import { Save20, Download20, TrashCan20 } from "@carbon/icons-react";

import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  Button,
  TableSelectAll,
  TableSelectRow,
  TableBatchActions,
  TableBatchAction,
} from "carbon-components-react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import ProjectModal from "./ProjectModal";

const Project = (props) => {
  const [modal, setModal] = useState(false);
  const headerData = [
    {
      header: "Id",
      key: "id",
    },
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Admin",
      key: "admin",
    },
    {
      header: "Created Date",
      key: "createdDate",
    },
  ];

  const rowData = [
    {
      name: "Kevins VM Groups",
      id: "a",
      name: "Load Balancer 3",
      Admin: 3000,
      createdDate: "HTTP",
    },
    {
      name: "Kevins VM Groups",
      id: "a",
      name: "Load Balancer 3",
      Admin: 3000,
      createdDate: "HTTP",
    },
    {
      name: "Kevins VM Groups",
      id: "a",
      name: "Load Balancer 3",
      Admin: 3000,
      createdDate: "HTTP",
    },
  ];
  return (
    <div style={{ margin: 55 }}>
      <DataTable rows={rowData} headers={headerData}>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getBatchActionProps,
          onInputChange,
          selectedRows,
        }) => (
          <TableContainer title="Projelerim">
            <TableToolbar>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={TrashCan20}
                  onClick={() => console.log("clicked")}
                >
                  Delete
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Save20}
                  onClick={() => console.log("clicked")}
                >
                  Save
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Download20}
                  onClick={() => console.log("clicked")}
                >
                  Download
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onChange={onInputChange}
                />
                <TableToolbarMenu
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                >
                  <TableToolbarAction
                    primaryFocus
                    onClick={() => alert("Alert 1")}
                  >
                    Action 1
                  </TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert 2")}>
                    Action 2
                  </TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert 3")}>
                    Action 3
                  </TableToolbarAction>
                </TableToolbarMenu>
                <Button
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onClick={() => setModal(true)}
                  size="small"
                  kind="primary"
                >
                  Add new
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      <ProjectModal isOpen={modal} closeModal={() => setModal(false)} />
    </div>
  );
};

Project.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
