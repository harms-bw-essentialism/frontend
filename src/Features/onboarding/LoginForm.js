import React, { useState } from "react";
import { Link } from "react-router-dom"
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(10),
//       height: theme.spacing(16),
//     },
//   },
// }));

const styles = {};

const loginFormEndPoint = process.env.REACT_APP_LOGIN_ENDPOINT;

const LoginForm = props => {
  // const classes = useStyles();
  const { classes } = props;
   const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);


  return (
    
    <React.Fragment>

              <Paper elevation={3}>
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
                      <br></br>
                     
                        <Button type="submit" variant="contained" disabled={isSubmitting} color="primary">
                          Login
                        </Button>
                      
                      <p>Don't have an account? <Link to="./register">Register Here!</Link></p>
                    </form>
                  );
                }}
              </Formik>
              </Paper>
         
    </React.Fragment>
    
  );
};

export default LoginForm;
