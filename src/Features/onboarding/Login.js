import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";

const Login = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="email-address">Email address</InputLabel>
      <Input id="email-address" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
};

export default Login;
