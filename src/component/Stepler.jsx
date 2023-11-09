import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
} from "react-icons/hi2";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { color } from "framer-motion";
const steps = [
  {
    label: "Skills",
    icon: (
      <HiHome style={{ width: "30px", height: "30px", color: "#FFC26E" }} />
    ),
    skillImg: [<HiHome />, <HiUser />, <HiViewColumns />, <HiRectangleGroup />],
  },
  {
    label: "Experiance",
    icon: (
      <HiUser style={{ width: "30px", height: "30px", color: "#FFC26E" }} />
    ),
    description: "AAAAAAAAAAAAAA",
  },
  {
    label: "Awards",
    icon: (
      <HiViewColumns
        style={{ width: "30px", height: "30px", color: "#FFC26E" }}
      />
    ),
    description: "BBBBBBBB",
  },
  {
    label: "Testimonial",
    icon: (
      <HiRectangleGroup
        style={{ width: "30px", height: "30px", color: "#FFC26E" }}
      />
    ),
    description: "Testimonial",
  },
];

const firstStep = steps[0];
const skillImages = firstStep.skillImg;

const Stepler = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [Arrow, setArrow] = useState(0);

  const handleNext = (value) => {
    setActiveStep(value);
    setArrow(value);
  };

  console.log("Arrow", Arrow);
  console.log("activeStep", activeStep);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="w-full pl-10 pr-10">
      <Box
        sx={{
          maxWidth: 400,
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index} onClick={(e) => handleNext(index)}>
              <div className="w-full cursor-pointer">
                <StepLabel icon={step.icon}>
                  <div className=" flex flex-row px-6 py-2 gap-2 text-[#BFC7D2] font-semibold  border-[0.5px] border-[#BFC7D2] bg-white/10 backdrop-blur-sm rounded-md cursor-pointer">
                    {step.label}

                    {Arrow == index ? (
                      <BsCaretDown
                        style={{
                          color: "#FFC26E",
                          fontSize: "20px",
                        }}
                      />
                    ) : (
                      <BsCaretUp
                        style={{
                          color: "#BFC7D2",

                          gap: "2px",
                          fontSize: "20px",
                        }}
                      />
                    )}
                  </div>
                </StepLabel>
              </div>

              <StepContent>
                <div className="flex flex-row text-white ">
                  {step.label === "Skills" ? (
                    skillImages.map((ele, index) => {
                      return (
                        <div
                          className=" text-[30px]  text-[#FFC26E]"
                          key={index}
                        >
                          {ele}
                        </div>
                      );
                    })
                  ) : step.label === "Experiance" ? (
                    <Typography>{step.description}</Typography>
                  ) : step.label === "Awards" ? (
                    <Typography>{step.description}</Typography>
                  ) : step.label === "Testimonial" ? (
                    <Typography>{step.description}</Typography>
                  ) : (
                    ""
                  )}
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default Stepler;
