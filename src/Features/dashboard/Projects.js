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
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";

const styles = {};

const Projects = () => {
  const projects = useSelector(state => state.projects.projects);

  // projects.forEach((project, index) => {
  //   console.log(project, index);
  // });

  return (
    <React.Fragment>
      <List component="ul">
        {projects.map(({ projectId, projectName }) => (
          //   <ListItem key={projectId} button onClick={() => onSelect(projectId)}>
          <ListItem key={projectId} button onClick={() => {}}>
            <ListItemText primary={projectName} />
            <ListItemSecondaryAction>
              <IconButton
                color="primary"
                onClick={() => ondeviceorientationabsolute(projectId)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Projects;
