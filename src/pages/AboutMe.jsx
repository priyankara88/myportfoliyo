import { Link } from "react-router-dom";
import Particale from "../component/Particale";
import Social from "../component/Social";
import { BiLogoReact } from "react-icons/bi";

const MyData = ["Experiance", "Skils", "Awards", "Testermonial"];
const AboutMe = () => {
  return (
    <>
      <Particale />
      <div className=" flex  w-screen relative">
        <div className="flex items-center px-16 xl:px-0 xl:h-[98px]  xl:pl-40 w-full">
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
      </div>

      <div className="w-full p-5 py-8 flex flex-col justify-center xl:flex-row ">
        <div className="w-full flex items-center justify-center md:items-center md:justify-center ">
          <div className="w-full h-full">
            test test fffffffffffffffffffffffffff
          </div>
        </div>
        <div className="w-full flex flex-col xl:mx-0  flex-wrap pr-32 ">
          <div className=" flex mx-auto xl:mx-0   text-[#FFC26E]">
            {MyData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="py-2 w-full xl:w-[150px] flex items-center justify-center cursor-pointer capitalize border-[0.025px] z-10 rounded-sm border-gray-300 bg-white/10 backdrop-blur-sm"
                >
                  {data}
                </div>
              );
            })}
          </div>
          <div className="flex xl:w-[600px]  flex-row   justify-center ">
            <div className="grid grid-cols-4 grid-rows-4 gap-10   place-items-center">
              <div className="xl:w-[150px]">
                <BiLogoReact className="  icon w-12 h-12 text-[#BFC7D2]" />
              </div>
              <div className="xl:w-[150px]">
                <BiLogoReact className="icon w-12 h-12 text-[#BFC7D2] " />
              </div>
              <div className="xl:w-[150px]">
                <BiLogoReact className="icon w-12 h-12 text-[#BFC7D2] " />
              </div>
              <div className="xl:w-[150px]">
                <BiLogoReact className="icon w-12 h-12 text-[#BFC7D2] " />
              </div>

              <div className="xl:w-[150px]">
                <BiLogoReact className=" icon w-12 h-12 text-[#BFC7D2]" />
              </div>
              <div className="xl:w-[150px]">
                <BiLogoReact className="icon w-12 h-12 text-[#BFC7D2] " />
              </div>
              <div className="xl:w-[150px]">
                <BiLogoReact className="icon w-12 h-12 text-[#BFC7D2] " />
              </div>
              <div className="xl:w-[150px]">
                <BiLogoReact className="icon w-12 h-12 text-[#BFC7D2] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
