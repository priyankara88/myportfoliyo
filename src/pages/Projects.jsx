import Particale from "../component/Particale";
import Update from "../assets/img/404.gif";
import Social from "../component/Social";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Particale />
      <div className=" h-screen ">
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
        <div className="not-found-body">
          <div className="error-code max-w-md mx-auto text-2xl text-[#FFC26E]">
            Coming Soon
          </div>
          <img
            className="w-full max-w-md mx-auto"
            src={Update}
            alt="ComminSoon"
          />
          {/* <div className="error-message max-w-md mx-auto">ComminSoon</div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
