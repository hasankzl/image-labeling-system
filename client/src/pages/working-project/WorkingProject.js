import {
  Grid,
  Row,
  Column,
  OrderedList,
  ListItem,
} from "carbon-components-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactPictureAnnotation } from "react-picture-annotation";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { FIND_PROJECT_URL, IMAGE_BASE_URL } from "../../utils/constants";
import { Button } from "carbon-components-react";
import Notification from "../../components/Notification";
const WorkingProject = (props) => {
  let { id } = useParams();
  const [Labels, setLabels] = useState([]);
  const [project, setProject] = useState({});
  const [image, setImage] = useState({});
  const [imageIndex, setImageIndex] = useState(0);
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const onSelect = (selectedId) => console.log(selectedId);
  const onChange = (data) => {
    setLabels(data);
    console.log(data);
  };

  useEffect(async () => {
    await axios.get(FIND_PROJECT_URL + id).then((res) => {
      setProject(res.data);
      setImage(res.data.imageList[imageIndex]);
      debugger;
    });
  }, [id]);

  const nextImage = () => {
    debugger;
    const newIndex = imageIndex + 1;
    if (newIndex < project.imageList.length) {
      setImage(project.imageList[imageIndex + 1]);
      setImageIndex(imageIndex + 1);
    } else {
      Notification.warning({ message: "Baska resim bulunmamaktadir" });
    }
  };
  return (
    <div style={{ margin: 75, marginTop: 100 }}>
      <div class="row" style={{ height: "75vh" }}>
        <div class="col-sm-3">
          <h3>Ip Uclari</h3>
        </div>
        <div class="col-sm-5">
          <h4>Çoklu Etiket Seçimi - {image.name}</h4>
          <ReactPictureAnnotation
            image={IMAGE_BASE_URL + image.name}
            onSelect={onSelect}
            onChange={onChange}
            width={800}
            height={700}
          />
        </div>
        <div class="col-sm-4">
          <h3>Etiketler</h3>
          <OrderedList style={{ margin: 30 }}>
            {Labels.map((label) => (
              <ListItem> - {label.comment}</ListItem>
            ))}
          </OrderedList>
        </div>
      </div>
      <div className="row">
        <Button onClick={() => nextImage()}>Kaydet</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkingProject);
