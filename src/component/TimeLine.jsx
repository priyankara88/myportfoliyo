import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  {
    id: 1,
    name: "Software Developer",
    time: "2013-2015",
  },
  {
    id: 2,
    name: "Software Engineer",
    time: "2015-2022",
  },
  {
    id: 3,
    name: "Software Engineer | FrontEnd Developer",
    time: "2023-present",
  },
];

// const steps = Object.entries(stepsnew);

const TimeLine = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label.id} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <p className="text-[#BFC7D2]">{label.name}</p>
              <p className="text-[#FFC26E]">{label.time}</p>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 ? (
          <div className="mt-4 w-full border-[0.5px] rounded-lg shadow-2xl backdrop-blur-lg !border-gray-700">
            {activeStep}
          </div>
        ) : activeStep === 1 ? (
          <div className="mt-4 w-full border-[0.5px] rounded-lg shadow-2xl backdrop-blur-lg !border-gray-700">
            {activeStep}
          </div>
        ) : (
          <div className="mt-4 w-full border-[0.5px] rounded-lg shadow-2xl backdrop-blur-lg !border-gray-700">
            {activeStep}
          </div>
        )}
      </div>
    </Box>
  );
};

export default TimeLine;
