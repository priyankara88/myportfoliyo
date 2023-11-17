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
        <div className="absolute   flex items-center px-16 xl:px-0 xl:h-[98px]  xl:pl-40 w-full">
          <div className="container mx-auto  ">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 xl:pr-40">
              {/* logo */}
              <Link
                to={"/"}
                className="text-white font-semibold  text-[20px]  lg:text-[30px] "
              >
                MGPS
              </Link>
              {/* social media */}
              <div className="relative flex items-center justify-center z-0 ">
                <Social />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full  ">
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
          {/* xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0 */}
          {/* <div
            // style={{ backgroundImage: `url(${Backimg})` }}
            className=" w-[1200px] h-full absolute right-0 bottom-0  xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0  "
          ></div> */}
          <div>
            {/* bg-none z-10 flex w-full h-screen items-center justify-center max-w-[400px] max-h-[550px] absolute -botton-32 lg:bottom-0 lg:right-[8%]  right-0 bottom-0 */}
            <div className="hidden absolute   backdrop-blur-sm bg-[#BFC7D2]/10   rounded-t-full  xl:flex first-line:items-center justify-center w-[350px] h-[350px] lg:right-60 lg:bottom-48 border-2 border-#25A6E9 ">
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
