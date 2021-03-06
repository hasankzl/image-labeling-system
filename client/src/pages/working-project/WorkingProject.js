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
import { Save24 } from "@carbon/icons-react";
import { SkipForward24 } from "@carbon/icons-react";
import { ContentSwitcher } from "carbon-components-react";
import { Switch } from "carbon-components-react";
import imageLabel1 from "../../images/imageLabel1.png";
import imageLabel2 from "../../images/imageLabel2.png";

const WorkingProject = (props) => {
  let { id } = useParams();
  const [labels, setLabels] = useState([]);
  const [project, setProject] = useState({});
  const [image, setImage] = useState({});
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [tipsIndex, setTipsIndex] = useState(0);
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const onSelect = (selectedId) => console.log(selectedId);
  const onChange = (data) => {
    if (selectedLabel == "") {
      Notification.warning({ message: "Lutfen bir etiket turu seciniz" });
      return;
    }
    if (data.length > 0) data[data.length - 1].comment = selectedLabel;
    setLabels(data);
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
          <ContentSwitcher
            selectedIndex={tipsIndex}
            onChange={(obj) => {
              let { index } = obj;
              setTipsIndex(index);
            }}
          >
            <Switch name="one" text="A????klama" />
            <Switch name="two" text="K??sayollar" />
          </ContentSwitcher>
          {tipsIndex == 0 ? (
            <div>
              <div style={{ margin: 30 }}>
                <h3>Iyi Ornekler</h3>
                <p>Sadece ara??lar??n etraf??n?? kare ????z??m?? yap??n.</p>
                <p>Karenin kenarlar?? arac??n kenarlar??na denk gelmelidir.</p>
                <img src={imageLabel2} />
              </div>
              <div style={{ margin: 30 }}>
                <h3>K??t?? Ornekler</h3>
                <p>A??a????daki se??imde ??izilen kare b??t??n arac?? kapsam??yor</p>
                <img src={imageLabel1} />
              </div>
            </div>
          ) : (
            <div>
              <OrderedList style={{ margin: 30 }}>
                <ListItem> Di??er resime ge??mek i??in crtl+p</ListItem>
                <ListItem> resimi kaydetmek i??in crtl+s</ListItem>
              </OrderedList>
            </div>
          )}
        </div>

        <div class="col-sm-5">
          <h4>??oklu Etiket Se??imi - {image.name}</h4>
          <ReactPictureAnnotation
            image={IMAGE_BASE_URL + image.name}
            onSelect={onSelect}
            onChange={onChange}
            annotationData={labels}
            width={800}
            height={700}
          />
        </div>
        <div class="col-sm-2">
          <h3>Etiketler Turleri</h3>
          <div style={{ margin: 10, display: "grid" }}>
            {project.project &&
              project.project.labelTypeList.map((label) => (
                <Button
                  kind="ghost"
                  onClick={() => setSelectedLabel(label.name)}
                  disabled={label.name == selectedLabel}
                >
                  {label.name}
                </Button>
              ))}
          </div>
        </div>
        <div class="col-sm-2">
          <h3>Etiketler</h3>
          <OrderedList style={{ margin: 30 }}>
            {labels.map((label) => (
              <ListItem> - {label.comment}</ListItem>
            ))}
          </OrderedList>
        </div>
      </div>
      <div className="row" style={{ marginLeft: "70%" }}>
        <Button onClick={() => nextImage()} style={{ margin: 30, width: 150 }}>
          <SkipForward24 />
          <p style={{ marginTop: 10 }}>Gec</p>
        </Button>
        <Button onClick={() => saveLabels()} style={{ margin: 30, width: 150 }}>
          <Save24 />
          <p style={{ marginTop: 10 }}>Kaydet</p>
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkingProject);
