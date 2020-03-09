import React from "react";
import Projects from "./Projects";
import Values from "./Values";
import { Divider } from "@material-ui/core";
import Submission from "../InputProjects/Submission";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  return (
    <>
      <h2>Projects</h2>
      <Projects />
      <Divider />
      <h2>Values</h2>
      <Values />
      <Button
        onClick={evt => {
          evt.preventDefault();
          history.push("/processing");
        }}
      >
        Reselect Values
      </Button>
    </>
  );
};

export default Dashboard;
