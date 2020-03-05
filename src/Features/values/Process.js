import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button
} from "@material-ui/core";
import Selection from "./Selection";
import Narrow from "./Narrow";
import Submission from "../projects/Submission";

const Process = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      textAlign: "center",
      height: "90vh",
      overflow: "scroll"
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instruction: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }));

  const getSteps = () => {
    return [
      { text: "Select values", component: <Selection /> },
      { text: "Narrow Values", component: <Narrow /> },
      { text: "Enter Projects", component: <Submission /> }
    ];
  };

  const steps = getSteps();

  const [activeStep, setActiveStep] = useState(0);

  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return <>{steps[0].component}</>;
      case 1:
        return <>{steps[1].component}</>;
      case 2:
        return <>{steps[2].component}</>;
      default:
        return "Unknown stepIndex";
    }
  };

  const handleNext = evt => {
    evt.preventDefault();
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = evt => {
    evt.preventDefault();
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(step => (
          <Step key={step.id}>
            <StepLabel>{step.text}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All Steps Completed
            </Typography>
          </div>
        ) : (
          <>
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
            <Button
              disabled={activeStep === 0}
              className={classes.backButton}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Process;
