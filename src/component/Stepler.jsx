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
import "../App.css";
const steps = [
  {
    label: "Skills",
    icon: (
      <div className="border-animation max-lg:p-2 lg:p-5  bg-[#ffffff09] border-[#25a6e9] text-white border rounded-full relative -ml-5 bg-black">
        <HiHome
          className="animate-spin"
          style={{ width: "30px", height: "30px", color: "#FFC26E" }}
        />
      </div>
    ),
    skillImg: [<HiHome />, <HiUser />, <HiViewColumns />, <HiRectangleGroup />],
  },
  {
    label: "Experiance",
    icon: (
      <div className="border-animation max-lg:p-2 lg:p-5  bg-[#ffffff09] border-[#25a6e9] text-white border rounded-full relative -ml-5 bg-black">
        <HiUser style={{ width: "30px", height: "30px", color: "#FFC26E" }} />
      </div>
    ),
    description: (
      <ul className="list-disc flex-col w-full gap-3 ml-5">
        <li>
          BBBBBBB sdfsd fdfasdf hsdfasdfg sdfgs dfgsdf fgsaweer asdfasdfasd
          asdfadsfadsfa g sd asdfaB
        </li>
        <ul className="list-disc  ml-5">
          <li>aaaaa</li>
          <li className="mb-5">aaaaa</li>
        </ul>
        <li>BBBBBBBB</li>
        <ul className="list-disc ml-5">
          <li>aaaaa</li>
          <li className="mb-5">aaaaa</li>
        </ul>
        <li>BBBBBBBB</li>
        <ul className="list-disc ml-5">
          <li>aaaaa</li>
          <li className="mb-5">aaaaa</li>
        </ul>
      </ul>
    ),
  },
  {
    label: "Awards",
    icon: (
      <div className="border-animation max-lg:p-2 lg:p-5 bg-[#ffffff09] border-[#25a6e9] text-white border rounded-full relative -ml-5 bg-black">
        <HiViewColumns
          style={{ width: "30px", height: "30px", color: "#FFC26E" }}
        />
      </div>
    ),
    description: "BBBBBBBB",
  },
  {
    label: "Testimonial",
    icon: (
      <div className="border-animation max-lg:p-2 lg:p-5  bg-[#ffffff09] border-[#25a6e9] text-white border rounded-full relative -ml-5 bg-black">
        <HiRectangleGroup
          style={{ width: "30px", height: "30px", color: "#FFC26E" }}
        />
      </div>
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
    <div className="w-full flex absolute justify-center items-center pl-10 pr-10">
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
                <div className="flex flex-row w-full  max-lg:w-[50vw] text-white ">
                  {step.label === "Skills" ? (
                    skillImages.map((ele, index) => {
                      return (
                        <div
                          className=" p-5 backdrop-blur-lg rounded-lg w-screen max-lg:w-[50vw] bg-[#ffffff09]"
                          key={index}
                        >
                          {ele}
                        </div>
                      );
                    })
                  ) : step.label === "Experiance" ? (
                    <Typography className="p-5 backdrop-blur-lg rounded-lg w-screen max-lg:w-[50vw] bg-[#ffffff09]">
                      {step.description}
                    </Typography>
                  ) : step.label === "Awards" ? (
                    <Typography className="p-5 backdrop-blur-lg rounded-lg w-screen bg-[#ffffff09]  max-lg:w-[50vw]">
                      {step.description}
                    </Typography>
                  ) : step.label === "Testimonial" ? (
                    <Typography className="p-5 backdrop-blur-lg rounded-lg w-screen bg-[#ffffff09] max-lg:w-[50vw]">
                      {step.description}
                    </Typography>
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
