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
import { useSelector } from "react-redux";

const styles = {};

const Projects = () => {
  const projects = useSelector(state => state.projects.projects);

  return (
    <React.Fragment>
      <List component="ul">
        {projects.map(({ projectId, projectName }) => (
          //   <ListItem key={projectId} button onClick={() => onSelect(projectId)}>
          <ListItem key={projectId} button onClick={() => {}}>
            <ListItemText primary={projectName} />
            <ListItemSecondAction>
              <IconButton
                color="primary"
                onClick={() => ondeviceorientationabsolute(projectId)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondAction>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Projects;
