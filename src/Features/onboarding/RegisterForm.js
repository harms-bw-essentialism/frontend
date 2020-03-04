import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { registerUser } from "../../Redux/Actions";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";

const RegisterForm = props => {
  const { classes } = props;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Redirect to="/processing" />
      ) : (
        <Paper elevation={3}>
          <Formik
            initialValues={{ username: "", password: "", passwordConfirm: "" }}
            onSubmit={(values, { setSubmitting }) => {
              const credentials = {
                username: values.username,
                password: values.password
              };
              setSubmitting(true);
              dispatch(registerUser(credentials));
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Required"),
              password: Yup.string()
                .min(8)
                .required("Required"),
              passwordConfirm: Yup.string().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                )
              })
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
                    error={errors.username && touched.username}
                    label="Username"
                    name="username"
                    className={classes.textField}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.username && touched.username}
                    margin="normal"
                  />
                  <br />
                  <TextField
                    error={errors.password && touched.password}
                    label="Password"
                    name="password"
                    type="password"
                    className={classes.textField}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.password && touched.password}
                    margin="normal"
                  />
                  <br />
                  <TextField
                    error={errors.password && touched.password}
                    label="Confirm Password"
                    name="passwordConfirm"
                    type="password"
                    className={classes.textField}
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.passwordConfirm && touched.passwordConfirm
                    }
                    margin="normal"
                  />
                  <br />
                  <span class="error" style={{ color: "red" }}>
                    {errors.passwordConfirm}
                  </span>
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    color="primary"
                  >
                    Register
                  </Button>
                  <p>
                    Already have an accout?{" "}
                    <Link to="./login">Login Here!</Link>
                  </p>
                </form>
              );
            }}
          </Formik>
        </Paper>
      )}
    </React.Fragment>
  );
};

export default RegisterForm;
