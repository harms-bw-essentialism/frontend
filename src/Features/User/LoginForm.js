import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./actions";

const LoginForm = props => {
  // const classes = useStyles();
  const { classes } = props;
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Redirect to="/processing" />
      ) : (
        <Paper elevation={3}>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              const credentials = {
                username: values.username,
                password: values.password
              };
              setSubmitting(true);
              dispatch(loginUser(credentials));
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Required"),
              password: Yup.string()
                .min(8)
                .required("Required")
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
                  <br></br>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    color="primary"
                  >
                    Login
                  </Button>

                  <p>
                    Don't have an account? <Link to="/">Register Here!</Link>
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

export default LoginForm;
