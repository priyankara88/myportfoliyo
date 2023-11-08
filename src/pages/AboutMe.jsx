import { Link } from "react-router-dom";
import Particale from "../component/Particale";
import Social from "../component/Social";
import { BiLogoReact } from "react-icons/bi";
import Stepler from "../component/Stepler";

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
              <div className="w-full max-md:h-[74vh] mt-24 fixed  -z-50">
                <div className="h-[23vh] text-white p-5 max-md:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  saepe ex quidem, provident, exercitationem sit obcaecati
                  veniam corrupti quo nam eum dolorum sapiente nulla odit unde
                  natus perferendis atque nesciunt.
                </div>
                <div className="h-full">
                  <Stepler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
