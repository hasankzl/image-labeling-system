import { Workspace24, Edit24, Delete24 } from "@carbon/icons-react";

import { Button } from "carbon-components-react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProjectModal from "./ImageSetModal";
import { getAllImageSet, deleteImageSet } from "./action";
import ReactFlexyTable from "react-flexy-table";
import { UnorderedList } from "carbon-components-react";
import { ListItem } from "carbon-components-react";
import ImageSetModal from "./ImageSetModal";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric  ",
};

const ImageSet = ({
  getAllImageSet: _getAllImageSet,
  imageSets,
  deleteImageSet: _deleteImageSet,
}) => {
  const [modal, setModal] = useState(false);

  const handleDelete = (id) => {
    _deleteImageSet(id).then((res) => {
      if (res == 200) {
        _getAllImageSet();
      }
    });
  };

  useEffect(() => {
    _getAllImageSet();
  }, []);
  const columns = [
    {
      header: "Id",
      key: "id",
    },
    {
      header: "Resim seti adi",
      key: "name",
    },
    {
      header: "Created Date",
      td: (data) => (
        <span>{new Date(data.createdDate).toLocaleDateString("TR")}</span>
      ),
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
            <Button hasIconOnly iconDescription="Resim seti Guncelle">
              <Edit24 />
            </Button>
            <Button
              hasIconOnly
              iconDescription="Resim Seti Sil"
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
        <Button onClick={() => setModal(true)}>Resim Seti Ekle</Button>
      </div>
      <div>
        <ReactFlexyTable
          data={imageSets}
          columns={columns}
          sortable
          globalSearch
          filterable
          previousText="??nceki"
          nextText="Sonraki"
          rowsText="Sat??rlar"
          pageText="Sayfa"
          ofText="i??inden"
          totalDataText="toplam Veri"
          filteredDataText="Filtrelenmi?? veri"
          downloadExcelText="excel indir"
        />
      </div>
      <ImageSetModal
        isOpen={modal}
        closeModal={() => setModal(false)}
        getAll={_getAllImageSet}
      />
    </div>
  );
};

const mapStateToProps = ({ imageSetReducer }) => ({
  imageSets: imageSetReducer.imageSets,
});

const mapDispatchToProps = { getAllImageSet, deleteImageSet };

export default connect(mapStateToProps, mapDispatchToProps)(ImageSet);
