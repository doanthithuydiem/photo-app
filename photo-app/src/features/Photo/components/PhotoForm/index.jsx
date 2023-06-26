import PropType from "prop-types";
import React from "react";
import { FormGroup, Button, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
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

function PhotoForm(props) {
  const { isAddMode, initialValues, onSubmit } = props;
  const validationSchema = Yup.object({
    title: Yup.string().required("This field is required"),
    categoryId: Yup.number().required("This field is required"),
    photo: Yup.string().required("This field is required"),
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
          // làm thêm bắt validate cho 3 customFiled  (InputField, selectField, RandomPhotoField)
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: wow nature ..."
            />

            <FastField
              name="categoryId"
              component={selectField}
              label="category"
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