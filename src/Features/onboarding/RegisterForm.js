import React, { useState } from "react";
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";
import {
    TextField,
    Button,
  } from "@material-ui/core";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
  
  const styles = {};
  
  const registerFormEndPoint = process.env.REACT_APP_LOGIN_ENDPOINT;
  
  const RegisterForm = props => {
    const { classes } = props;
    const [open, setOpen] = useState(false);
    const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
    // const handleClickOpen = () => {
    //   setSubmitionCompleted(false);
    //   setOpen(true);
    // };
  
    return (
        <React.Fragment>
            <Formik
                initialValues={{ email: "", password: "", passwordConfirm: "" }}
                onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                axios.post(registerFormEndPoint, values).then(resp => {
                    setSubmitionCompleted(true);
                });
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("Required"),
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
                            error={errors.email && touched.email}
                            label="Email"
                            name="email"
                            className={classes.textField}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.email && touched.email}
                            margin="normal"
                        />
                        <br/>
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
                        <br/>
                        <TextField
                            error={errors.password && touched.password}
                            label="Confirm Password"
                            name="passwordConfirm"
                            type="password"
                            className={classes.textField}
                            value={values.passwordConfirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.passwordConfirm && touched.passwordConfirm}
                            margin="normal"
                        />
                        <br/>
                        <span class="error" style={{ color: "red" }}>
                            {errors.changepassword}
                        </span>
                        <br/>
                        <Button type="submit" disabled={isSubmitting}>
                            Register
                        </Button>
                        <p>Already have an accout? <Link to="./login">Login Here!</Link></p>
                    </form>
                );

                }}
            </Formik>
        </React.Fragment>
    );
  };
  
  export default RegisterForm;
  