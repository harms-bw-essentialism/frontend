import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
// import { withStyles } from '@material-ui/core/styles';
// import { Edit, Delete } from '@material-ui/icons';
import axios from "axios";
import Projects from "./Projects";

const styles = {};

const Values = () => {
  const [values, setValues] = useState();

  useEffect(() => {
    axios
      .get(
        "https://essentialism2020.herokuapp.com/api/essentialism/values/user/:id"
      )
      .then(response => setValues(response.data.results))
      .catch(err => console.log("Error", err));
  }, []);

  return (
    <React.Fragment>
      <Paper elevation={3}>
        {values.map(value => (
          <React.Fragment key={value.valueId}>
            <Typography
              className={classes.valueName}
              color="secondary"
              variant="h5"
            >
              {value.valueName}
            </Typography>
            <Projects />
          </React.Fragment>
        ))}
      </Paper>
    </React.Fragment>
  );
};

export default Values;
