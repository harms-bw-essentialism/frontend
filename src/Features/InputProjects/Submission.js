import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitProject } from "./actions";
import {
  Divider,
  FormControl,
  NativeSelect,
  InputLabel,
  TextField,
  TextareaAutosize,
  Button,
  Paper,
  CardContent,
  Card,
  Typography
} from "@material-ui/core";

function Submission() {
  const SubmittedProjects = () => {
    const userProjects = useSelector(state => state.projects.projects);
    return (
      <Paper>
        {userProjects.map(project => (
          <Card key={project.projectid}>
            <CardContent>
              <Typography>{project.projectName}</Typography>
              <Typography>{project.projectDescription}</Typography>
              <Typography>{project.value}</Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>
    );
  };

  const SubmissionForm = () => {
    const userId = useSelector(state => state.user.user.userid);
    const dispatch = useDispatch();
    const [newProject, setNewProject] = useState({
      projectName: null,
      projectDescription: null,
      value: topThree[0].valueName,
      userId: userId
    });

    const handleSubmit = project => {
      dispatch(submitProject(project));
      setNewProject({
        projectName: "",
        projectDescription: "",
        value: topThree[0].name
      });
    };

    const handleChange = key => evt => {
      setNewProject({ ...newProject, [key]: evt.target.value });
    };
    return (
      <FormControl>
        <InputLabel>Project Name</InputLabel>
        <TextField
          onChange={handleChange(`projectName`)}
          value={newProject.projectName}
        />
        <Divider />
        <InputLabel>Project Description</InputLabel>
        <TextareaAutosize
          onChange={handleChange(`projectDescription`)}
          value={newProject.projectDescription}
        />
        <Divider />
        <InputLabel>Project Value Alignment</InputLabel>
        <NativeSelect onChange={handleChange(`value`)} value={newProject.value}>
          {topThree.map(item => (
            <option>{item.valueName}</option>
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
    );
  };

  const topThree = useSelector(state => state.values.topThreeValues);
  return (
    <>
      <SubmissionForm />
      {topThree.length ? <SubmittedProjects /> : null}
    </>
  );
}

export default Submission;
