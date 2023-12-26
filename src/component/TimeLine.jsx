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
    name: "React FrontEnd Developer",
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
            <p className="text-[#BFC7D2]">
              Architected an automated Android application that streamlined
              manual sales order-picking procedure, leading to 45% increase in
              sales and improved order processing efficiency. Boosted frontend
              and backend web application processes by implementing CI/CD
              pipelines that optimised order management, reduced
              order-to-delivery time from 1 week to 24hrs, and increased
              profitability by 15%. ▪ Enhanced code quality across the React
              codebase, reducing code review time, minimal software
              errors/performance bottlenecks and improved system stability. ▪
              Ensured delivery of high-quality software products by authoring
              REST API documentation and technical specifications.{" "}
            </p>
          </div>
        ) : activeStep === 1 ? (
          <div className="mt-4 w-full border-[0.5px] rounded-lg shadow-2xl backdrop-blur-lg !border-gray-700">
            <p className="text-[#BFC7D2]">
              Led development of a Logistic ERP system, which reduced
              procurement fraud by 90% and improved logistics efficiency. ▪
              Shepherded 12 developers in converting prototypes and wireframes
              into up-to-date frontend code using latest TypeScript React &
              Node.js versions, all within the agile framework. ▪ Designed
              software components that met organisational needs by liaising with
              stakeholders, including department heads and end-users to gather
              requirements. ▪ Minimised software errors by writing, reviewing
              and debugging clean, efficient and well-documented codes,
              integrating them with frameworks and APIs and utilising multiple
              tools to configure GUI. ▪ Utilised Selenium to build unit testing
              infrastructure in agile environment, resulting in optimal system
              performance and reduced user-reported bugs. ▪ Increased
              application responsiveness by providing post-implementation
              support, including code review, troubleshooting and user feedback
              to strengthen system integrity
            </p>
          </div>
        ) : (
          <div className="mt-4 w-full border-[0.5px] rounded-lg shadow-2xl backdrop-blur-lg !border-gray-700">
            <p className="text-[#BFC7D2]">
              ▪ Build and maintain responsive, interactive applications using
              modern web technologies such as React.js, resulting in a reduction
              in page load speeds and conversion rates. ▪ Design innovative,
              reusable User Interface (UI) components that reduce development
              costs and time for teams. ▪ Spearhead integration of third-party
              services and APIs to add new functionalities, increasing user
              interaction. ▪ Develop and execute frontend development strategies
              by implementing optimisation techniques such as code minification
              and troubleshooting issues using browser developer tools, thus
              increasing website performance.
            </p>
          </div>
        )}
      </div>
    </Box>
  );
};

export default TimeLine;
