import PropType from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, Button, Label, Input, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/inputField";
import selectField from "../../../../custom-fields/selectField";
import RandomPhotoField from "../../../../custom-fields/randomPhotoField";


PhotoForm.propotype = {
  onSubmit: PropType.func
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm (props) {
  const { isAddMode, initialValues, onSubmit } = props;

  if (!initialValues) return null;

  const validationSchema = Yup.object({
    title: Yup.string().isRequired("This field is required"),
    categoryId: Yup.number().isRequired("This field is required"),
    photo: Yup.string().isRequired("This field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: wow nature ..."
            />

            <FastField 
              name="catagoryId"
              component={selectField}
              label="catagory"
              placeholder="what's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            
            <FastField 
              name="photo"
              component={RandomPhotoField}
              label="photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting ? <Spinner size="sm" /> : ""}
                {isAddMode ? "Add To Album" : " Update Photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}  
    </Formik>
  );
}

export default PhotoForm;