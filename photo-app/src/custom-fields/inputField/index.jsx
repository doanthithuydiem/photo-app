import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage} from "formik";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  lable: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, lable, placeholder, disabled } = props;
  const { name, value, onChange, onBlur} = field;
  const { error, touched } = form;
  const showErr = error[name] && touched[name];

  return (
    <div>
      <FormGroup>
        {lable && <Label for={name}>{lable}</Label>}
        <Input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          invalid={showErr}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
}

 export default InputField;