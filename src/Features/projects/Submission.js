import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitProject } from "../../Redux/Actions";
import {
  Divider,
  FormControl,
  NativeSelect,
  InputLabel,
  TextField,
  TextareaAutosize,
  Button
} from "@material-ui/core";
import Projects from "./Projects";

function Submission() {
  const dispatch = useDispatch();
  const topThree = useSelector(state => state.values.topThreeValues);
  const [newProject, setNewProject] = useState({
    name: null,
    description: null,
    value: topThree[0].name
  });

  const handleSubmit = project => {
    dispatch(submitProject(project));
    setNewProject({ name: "", description: "", value: topThree[0].name });
  };

  const handleChange = key => evt => {
    setNewProject({ ...newProject, [key]: evt.target.value });
  };

  return (
    <>
      <FormControl>
        <InputLabel>Project Name</InputLabel>
        <TextField onChange={handleChange(`name`)} value={newProject.name} />
        <Divider />
        <InputLabel>Project Description</InputLabel>
        <TextareaAutosize
          onChange={handleChange(`description`)}
          value={newProject.description}
        />
        <Divider />
        <InputLabel>Project Value Alignment</InputLabel>
        <NativeSelect onChange={handleChange(`value`)} value={newProject.value}>
          {topThree.map(item => (
            <option>{item.name}</option>
          ))}
        </NativeSelect>
        <Button
          onClick={() => {
            handleSubmit(newProject);
          }}
          variant="contained"
        >
          Add Project
        </Button>
      </FormControl>
      {topThree.length ? <Projects /> : null}
    </>
  );
}

export default Submission;
