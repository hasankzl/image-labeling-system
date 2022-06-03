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
import {
  FIND_PROJECT_URL,
  IMAGE_BASE_URL,
  SAVE_LABELS_URL,
} from "../../utils/constants";
import { Button } from "carbon-components-react";
import Notification from "../../components/Notification";
const WorkingProject = (props) => {
  let { id } = useParams();
  const [labels, setLabels] = useState([]);
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
    });
  }, [id]);

  const nextImage = () => {
    const newIndex = imageIndex + 1;
    if (newIndex < project.imageList.length) {
      setImage(project.imageList[imageIndex + 1]);
      setImageIndex(imageIndex + 1);
      setLabels([]);
    } else {
      Notification.warning({ message: "Baska resim bulunmamaktadir" });
    }
  };

  const saveLabels = async () => {
    if (labels.length > 0) {
      const formatedLabels = [];
      labels.forEach((label) => {
        formatedLabels.push({
          comment: label.comment,
          x: label.mark.x,
          y: label.mark.y,
          height: label.mark.height,
          width: label.mark.width,
          image: {
            id: image.id,
          },
        });
      });
      await axios.post(SAVE_LABELS_URL, formatedLabels).then((res) => {
        if (res.status === 200) {
          Notification.success({ message: "Etiketler basariyla kaydedildi" });
          nextImage();
        }
      });
    } else {
      Notification.warning({ message: "Lutfen bir etiket ekleyiniz" });
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
            annotationData={labels}
            width={800}
            height={700}
          />
        </div>
        <div class="col-sm-4">
          <h3>Etiketler</h3>
          <OrderedList style={{ margin: 30 }}>
            {labels.map((label) => (
              <ListItem> - {label.comment}</ListItem>
            ))}
          </OrderedList>
        </div>
      </div>
      <div className="row">
        <Button onClick={() => nextImage()} style={{ margin: 30 }}>
          Gec
        </Button>
        <Button onClick={() => saveLabels()} style={{ margin: 30 }}>
          Kaydet
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkingProject);
