import { Link } from "react-router-dom";
import Button from "../component/Button";
import MyImage from "../component/MyImage";
import Particale from "../component/Particale";
import Social from "../component/Social";
import { motion } from "framer-motion";
import AnimatedText from "../component/AnimatedText";
const expanded = true;
const Home = () => {
  return (
    <>
      <Particale />

      <div className=" h-full w-full  ">
        <div className="flex w-full items-center justify-center   xl:pl-40">
          {/* <div className=" mx-auto  "> */}
          <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-y-6 py-8 xl:pr-40">
            {/* logo */}
            <div>
              <Link
                to={"/"}
                className="text-white font-semibold  sm:text-[50px]  lg:text-[40px] "
              >
                MGPS
              </Link>
            </div>

            {/* social media */}
            <div className="text-white gap-x-5 relative flex items-center justify-center z-0 ">
              <Social />
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* <div className="w-full h-full  ">
          <div className=" min-h-[500px] text-center flex flex-col justify-center  item-center xl:pt-40 xl:text-left container mx-auto ">
            <h1 className=" text-[20px] md:text-[28px] lg:text-[30px] text-[#BFC7D2] font-bold md:pl-30 xl:pl-40 lg:pt-[100px]">
              Hello, <span className="text-[#FFC26E]">It's Me</span> <br />
            </h1>
            <h1 className="xl:pl-40 text-[40px] lg:text-[50px] md:text-[50px] font-bold text-[#BFC7D2]">
              Priyankara Senarathne
            </h1>
            <h1 className="w- full xl:pl-40 max-w-sm md:max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-5 text-[20px] lg:text-[30px] text-white font-bold">
              And I'm{" "}
              <motion.span className="text-[#FFC26E]">
                <AnimatedText />
              </motion.span>
            </h1>

            <div className="flex items-center  justify-center xl:flex xl:items-start xl:justify-start xl:ml-40 ">
              <Button />
            </div>
          </div>

          <div>
            <div className="hidden absolute  overflow-hidden backdrop-blur-sm bg-[#BFC7D2]/10   rounded-t-full  xl:flex first-line:items-center justify-center w-[350px] h-[350px] lg:right-60 lg:bottom-48 border-2 border-#25A6E9 ">
              <MyImage />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
// lg:bg-Back xl:bg-cover
export default Home;
