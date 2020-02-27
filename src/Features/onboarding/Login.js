import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const styles = {};

const loginFormEndPoint = process.env.REACT_APP_LOGIN_ENDPOINT;

const Login = props => {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setSubmitionCompleted(false);
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Login!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-login"
      >
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-login">Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Login with Email Address and Password
              </DialogContentText>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  axios.post(loginFormEndPoint, values).then(resp => {
                    setSubmitionCompleted(true);
                  });
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required("Required"),
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
                        error={errors.email && touched.email}
                        label="email"
                        name="email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.email && touched.email}
                        margin="normal"
                      />
                      <TextField
                        error={errors.password && touched.password}
                        label="password"
                        name="password"
                        type="password"
                        className={classes.textField}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.password && touched.password}
                        margin="normal"
                      />
                      <DialogActions>
                        <Button type="submit" disabled={isSubmitting}>
                          Login
                        </Button>
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
};

export default Login;
