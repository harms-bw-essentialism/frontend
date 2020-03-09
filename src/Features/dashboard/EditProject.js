import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  TextField,
  Divider,
  TextareaAutosize,
  Button,
  NativeSelect
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editProject } from "../InputProjects/actions";

const EditProject = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const project = useSelector(state => state.projects.editingProject);
  const topThree = useSelector(state => state.values.topThreeValues);
  const isFetching = useSelector(state => state.projects.isFetching);
  const [editingProject, setEditingProject] = useState(...project);
  const projectId = editingProject.id;

  const handleChange = key => evt => {
    setEditingProject({ ...editingProject, [key]: evt.target.value });
  };

  return (
    <>
      {editingProject.length === 0 ? (
        <p>Loading</p>
      ) : (
        <FormControl>
          <InputLabel>Project Name</InputLabel>
          <TextField
            onChange={handleChange(`projectName`)}
            value={editingProject.projectName}
          />
          <Divider />
          <InputLabel>Project Description</InputLabel>
          <TextareaAutosize
            onChange={handleChange(`projectDescription`)}
            value={editingProject.projectDescription}
          />
          <Divider />
          <InputLabel>Project Value Alignment</InputLabel>
          <NativeSelect
            onChange={handleChange(`value`)}
            value={editingProject.value}
          >
            {topThree.map(item => (
              <option>{item.valueName}</option>
            ))}
          </NativeSelect>
          <Button
            onClick={evt => {
              evt.preventDefault();
              dispatch(editProject(projectId, editingProject));
              history.push("/dashboard");
            }}
            variant="contained"
          >
            Finish Editing Project
          </Button>
        </FormControl>
      )}
    </>
  );
};

export default EditProject;
