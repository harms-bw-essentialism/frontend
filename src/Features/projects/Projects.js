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
import { startEditingProject } from "../../Redux/Actions";

const Projects = () => {
  const dispatch = useDispatch();
  const userProjects = useSelector(state => state.projects.projects);

  const onEditClick = id => evt => {
    evt.preventDefault();
    dispatch(startEditingProject(id));
  };
  const onDeleteClick = id => evt => {
    evt.preventDefault();
    // dispatch(deleteItem(id))
  };

  const NormalState = ({ project }) => {
    return (
      <Card key={project.id}>
        <CardContent>
          <Typography>{project.name}</Typography>
          <Typography>{project.description}</Typography>
          <Typography>{project.value}</Typography>
          <EditIcon onClick={onEditClick(project.id)} />
          <DeleteIcon onClick={onDeleteClick(project.id)} />
        </CardContent>
      </Card>
    );
  };

  const EditState = ({ project }) => {
    return (
      <Card key={project.id}>
        <CardContent>
          <FormControl>
            <TextField value={project.name} />
            <TextareaAutosize value={project.description} />
            <NativeSelect></NativeSelect>
          </FormControl>
        </CardContent>
      </Card>
    );
  };

  return (
    <Paper>
      {userProjects.map(project => (
        <NormalState project={project} />
      ))}
    </Paper>
  );
};

export default Projects;
