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
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchEditingProject, deleteProject } from "../InputProjects/actions";

const styles = {};

const Projects = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const projects = useSelector(state => state.projects.projects);
  const userId = useSelector(state => state.user.userId);
  return (
    <React.Fragment>
      <List component="ul">
        {projects.map(({ projectId, projectName }) => (
          <ListItem key={projectId} button onClick={() => {}}>
            <ListItemText primary={projectName} />

            <IconButton
              color="primary"
              onClick={evt => {
                evt.preventDefault();
                history.push("/editProject");
                dispatch(fetchEditingProject(projectId));
              }}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              color="primary"
              onClick={evt => {
                evt.preventDefault();
                dispatch(deleteProject(projectId, userId));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Projects;
