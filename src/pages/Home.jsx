import { Link } from "react-router-dom";
import Button from "../component/Button";
import MyImage from "../component/MyImage";
import Particale from "../component/Particale";
import Social from "../component/Social";
import { motion } from "framer-motion";
import AnimatedText from "../component/AnimatedText";
import { useState } from "react";
const expanded = true;
const Home = () => {
  const [screen, setScreen] = useState(window.innerWidth <= 980 ? true : false);
  console.log("screen size", screen);

  return (
    <>
      <Particale />
      <div className="w-screen h-screen">
        <div className="w-full pl-14 lg:pl-36 pt-5 pr-24 flex flex-row items-center justify-between">
          <div className="flex items-center justify-center">
            {/* lg:text-[3rem] max-lg:text-[3rem] */}
            <p className="text-[5rem]  font-Carattere text-white">Priyankara</p>
          </div>
          <div className=" flex flex-row items-center justify-center">
            <Social />
          </div>
        </div>
        <div className="w-full mt-24 flex items-center justify-center">
          <div
            className={`${
              screen === true
                ? "w-[650px] h-[650px] bg-cover bg-no-repeat bg-center lg:hidden image flex items-center overflow-hidden rounded-full border-2 border-gray-200"
                : "w-[350px] h-[350px] bg-cover bg-no-repeat bg-center lg:hidden image flex items-center overflow-hidden rounded-full border-2 border-gray-200"
            } `}
          >
            <MyImage />
          </div>
        </div>
        {/* name container */}
        <div className="mt-36 lg:mt-24 w-full ">
          {screen === true ? (
            <div className=" w-full  overflow-auto text-center flex flex-col  xl:text-left container mx-auto ">
              <h1 className=" text-[20px] md:text-[28px] lg:text-[30px] text-[#BFC7D2] font-bold md:pl-30 xl:pl-40 ">
                Hello, <span className="text-[#FFC26E]">It's Me</span> <br />
              </h1>
              <h1 className="xl:pl-40 text-[5rem] lg:text-[50px] md:text-[50px] font-bold text-[#BFC7D2]">
                Priyankara Senarathne
              </h1>
              <h1 className="w-full font-Rubik xl:pl-40 xl:mb-5 text-[3rem] lg:text-[30px] text-white font-bold">
                And I'm Software Engineer
              </h1>
              <h1 className="text-[3rem] font-Rubik text-[#BFC7D2] font-bold">
                Full-Stack Developer
              </h1>

              <div className="mt-10 flex items-center  justify-center xl:flex xl:items-start xl:justify-start xl:ml-40 ">
                <Button />
              </div>
            </div>
          ) : (
            <div className=" w-full  overflow-auto text-center flex flex-col  xl:text-left container mx-auto ">
              <h1 className=" text-[20px] md:text-[28px] lg:text-[30px] text-[#BFC7D2] font-bold md:pl-30 xl:pl-40 ">
                Hello, <span className="text-[#FFC26E]">It's Me</span> <br />
              </h1>
              <h1 className="xl:pl-40 text-[5rem] lg:text-[50px] md:text-[50px] font-bold text-[#BFC7D2]">
                Priyankara Senarathne
              </h1>
              <h1 className="w- full xl:pl-40 max-w-sm md:max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-5 text-[5rem] lg:text-[30px] text-white font-bold">
                And I'm{" "}
                <motion.span className="text-[#FFC26E]">
                  <AnimatedText />
                </motion.span>
              </h1>

              <div className="flex items-center  justify-center xl:flex xl:items-start xl:justify-start xl:ml-40 ">
                <Button />
              </div>
            </div>
          )}

          <div>
            <div className="hidden absolute image overflow-hidden backdrop-blur-sm bg-[#BFC7D2]/10   rounded-t-full  xl:flex first-line:items-center justify-center w-[350px] h-[350px] lg:right-60 lg:bottom-48 border-2 border-#25A6E9 ">
              <MyImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// lg:bg-Back xl:bg-cover
export default Home;
