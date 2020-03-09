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
// import { Edit, DeleteIcon } from "@material-ui/icons";

import { useSelector } from "react-redux";
const styles = {};

const Values = () => {
  const values = useSelector(state => state.values.topThreeValues);
  console.log(`values: `, values);

  return (
    <React.Fragment>
      <Paper elevation={3}>
        {values.map(value => (
          <React.Fragment key={value.valueId}>
            <Typography
              //   className={classes.valueName}
              variant="h2"
            >
              {value.valueName}
            </Typography>
          </React.Fragment>
        ))}
      </Paper>
    </React.Fragment>
  );
};

export default Values;
