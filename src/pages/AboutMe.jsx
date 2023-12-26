import { Link } from "react-router-dom";
import Particale from "../component/Particale";
import Social from "../component/Social";
import { BiLogoReact } from "react-icons/bi";
import Stepler from "../component/Stepler";
import Skils from "../component/Skils";

const MyData = ["Experiance", "Skils", "Awards", "Testermonial"];
const AboutMe = () => {
  return (
    <>
      <Particale />
      <div className=" flex  w-full h-fu relative">
        <div className="absolute flex items-center px-8 xl:px-0 xl:h-[98px]  xl:pl-40 w-full">
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
        <div className="min-h-[500px] w-full absolute  flex flex-col -z-50">
          <Skils />
          {/* <div className=" max-lg:hidden w-2/4 h-screen justify-center m-auto absolute text-center ml-10 items-center flex p-10 text-4xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe ex
            quidem, provident, exercitationem sit obcaecati veniam corrupti quo
            nam eum dolorum sapiente nulla odit unde natus perferendis atque
            nesciunt.
          </div>
          <div className=" lg:hidden w-full h-full justify-center m-auto relative text-center  -top-64 items-center flex p-10 text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe ex
            quidem, provident, exercitationem sit obcaecati veniam corrupti quo
            nam eum dolorum sapiente nulla odit unde natus perferendis atque
            nesciunt.
          </div>
          <div className="w-2/4 max-lg:hidden h-screen justify-center m-auto absolute right-0 mr-10 items-center flex p-10">
            <Stepler /> *
            <Skils />
          </div>
          <div className="w-full lg:hidden h-full justify-center m-auto top-20 absolute items-center flex">
         <Stepler /> 
            <Skils />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
