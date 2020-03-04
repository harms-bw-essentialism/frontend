import React from "react";
import { useDispatch } from "react-redux";
import { addOther } from "../../Redux/Actions";
import { Button, TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const OtherForm = props => {
  const dispatch = useDispatch();

  const addValue = newValue => evt => {
    evt.preventDefault();
    dispatch(addOther(newValue));
  };

  return (
    <Formik
      initialValues={{ newValue: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        addValue(values.newValue);
      }}
      onChange={values => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        value: Yup.string().required("Required)")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              error={errors.newValue && touched.newValue}
              name="newValue"
              onChange={handleChange}
              onBlue={handleBlur}
              helperText={errors.value && touched.value}
              label="What you value"
            />
            <Button type="submit" variant="contained" color="primary">
              Add Value
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default OtherForm;
