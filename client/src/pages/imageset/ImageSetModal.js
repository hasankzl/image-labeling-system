import { Close24 } from "@carbon/icons-react";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { Form } from "carbon-components-react";
import { TextInput } from "carbon-components-react";
import { Select } from "carbon-components-react";
import { UnorderedList } from "carbon-components-react";
import { FileUploaderDropContainer } from "carbon-components-react";
import { FormItem } from "carbon-components-react";
import { ListItem } from "carbon-components-react";
import { SelectItem } from "carbon-components-react";
import { Button } from "carbon-components-react";
import { Modal } from "carbon-components-react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveImageSet } from "./action";
const emptyImageSet = {
  name: "",
  imageList: [],
};

const ImageSetModal = ({
  isOpen,
  closeModal,
  saveImageSet: _saveImageSet,
  getAll,
}) => {
  const [imageSet, setImageSet] = useState(emptyImageSet);
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setImageSet({ ...imageSet, [name]: value });
  };

  useEffect(() => {
    setImageSet(emptyImageSet);
    setImages([]);
    setImageUrls([]);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    _saveImageSet(imageSet).then((res) => {
      if (res == 200) {
        closeModal();
        getAll();
      }
    });
  };

  const handleFileUpload = (e) => {
    setImages([...e.target.files]);
  };

  useEffect(() => {
    if (images.length < 1) return;

    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);
  return (
    <Modal
      passiveModal
      open={isOpen}
      onRequestClose={() => closeModal()}
      modalHeading="Resim Seti Olustur"
      size="md"
    >
      <Form onSubmit={handleSubmit}>
        <TextInput
          labelText="Resim seti adi"
          placeholder="Resim seti adi"
          style={{ marginBottom: "1rem" }}
          value={imageSet.name}
          name="name"
          onChange={handleChange}
        />

        <FormItem>
          <p className="cds--file--label">Resim Yukle</p>
          <p className="cds--label-description">
            dosya boyunu 1mb dan kucuk olmalidir. JPG ve PNG destekler
          </p>

          <FileUploaderDropContainer
            accept={["image/jpeg", "image/png"]}
            labelText="Surukle birak yapin yada tiklayin"
            multiple
            name=""
            onAddFiles={handleFileUpload}
            onChange={handleFileUpload}
            role=""
          />
          <div />
        </FormItem>
        <div style={{ justifyContent: "space-evenly" }}>
          {imageUrls.map((imageSrc) => (
            <img src={imageSrc} width={60} height={60} style={{ margin: 10 }} />
          ))}
        </div>
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

const mapDispatchToProps = { saveImageSet };

export default connect(mapStateToProps, mapDispatchToProps)(ImageSetModal);
