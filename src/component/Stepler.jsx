import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { HiHome, HiUser } from "react-icons/hi2";

const steps = [
  {
    label: "Skils",
    description: (
      <div className="flex flex-row gap-3">
        <HiHome /> <HiUser />
      </div>
    ),
  },
  {
    label: "Experiance",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Awards",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const Stepler = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="flex items-center  justify-center  ">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                className="w-[150px] pl-10 pr-10 bg-orange-600 "
                onClick={() => handleStepClick(index)}
                StepIconComponent={HiHome}
              >
                {step.label}
              </StepLabel>

              <StepContent>
                {/* <Typography>{step.description}</Typography> */}
                {step.description}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default Stepler;
