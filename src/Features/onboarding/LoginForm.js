import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paper from "@material-ui/core/Paper";

const LoginForm = props => {
  const { classes } = props;
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  return (
    <React.Fragment>
      <Paper elevation={3}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            axios
              .post(
                `https://essentialism2020.herokuapp.com/api/essentialism/user/Login`,

                values
              )
              .then(resp => {
                setSubmitionCompleted(true);
                props.history.push("/processing");
              })
              .catch(err => console.log(err));
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
                  Don't have an account?{" "}
                  <Link to="./register">Register Here!</Link>
                </p>
              </form>
            );
          }}
        </Formik>
      </Paper>
    </React.Fragment>
  );
};

export default LoginForm;
