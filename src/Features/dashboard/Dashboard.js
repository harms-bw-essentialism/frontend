import React from "react";
import Projects from "./Projects";
import Values from "./Values";
import { Divider } from "@material-ui/core";
import Submission from "../InputProjects/Submission";

const Dashboard = () => {
  return (
    <>
      <h2>Projects</h2>
      <Projects />
      <Divider />
      <h2>Values</h2>
      <Values />
    </>
  );
};

export default Dashboard;
