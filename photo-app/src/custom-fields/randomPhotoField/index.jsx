import React from "react";
import PropTypes from "prop-types";
import RandomPhoto from "../../components/randomPhoto";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import { ErrorMessage } from "formik";

RandomPhoto.propTyes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: "",
};

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    </FormGroup>
  );
}

export default RandomPhotoField;