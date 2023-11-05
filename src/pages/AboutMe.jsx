import { Link } from "react-router-dom";
import Particale from "../component/Particale";
import Social from "../component/Social";

const MyData = ["Experiance", "Skils", "Awards", "Testermonial"];
const AboutMe = () => {
  return (
    <>
      <Particale />
      <div className=" flex  w-screen relative">
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
      </div>

      <div className="w-full p-5 py-32 flex flex-col justify-center xl:flex-row">
        <div className="flex xl:items-center xl:justify-center gap-x-4 xl:gap-x-24 mx-auto xl:mx-0 mb-4">
          test bbbbbbbbbbbbbbbbbbbbbb
        </div>
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {MyData.map((data, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer capitalize xl:text-lg relative   after:absolute after:bottom-1"
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
