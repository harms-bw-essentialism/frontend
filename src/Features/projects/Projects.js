import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Paper } from "@material-ui/core";

const Projects = () => {
  const userProjects = useSelector(state => state.projects.projects);

  return (
    <Paper>
      {userProjects.map(project => (
        <Card key={project.id}>
          <CardContent>
            <Typography>{project.name}</Typography>
            <Typography>{project.description}</Typography>
            <Typography>{project.value}</Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default Projects;
