import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  Paper,
  FormControl,
  TextField,
  TextareaAutosize,
  NativeSelect
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Projects = () => {
  const dispatch = useDispatch();
  const userProjects = useSelector(state => state.projects.projects);

  const onEditClick = id => evt => {
    evt.preventDefault();
  };
  const onDeleteClick = id => evt => {
    evt.preventDefault();
  };

  return (
    <Paper>
      {userProjects.map(project => (
        <Card key={project.id}>
          <CardContent>
            <Typography>{project.projectName}</Typography>
            <Typography>{project.projectDescription}</Typography>
            <Typography>{project.value}</Typography>
            <EditIcon onClick={onEditClick(project.id)} />
            <DeleteIcon onClick={onDeleteClick(project.id)} />
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default Projects;
