import {
  RiFacebookBoxLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    // <div className="absolute  flex text-white items-center justify-center gap-x-5 z-50 cursor-pointer">
    <>
      <Link
        key={1}
        to={"https://www.linkedin.com/in/priyankara-senarathne/"}
        target="_blank"
        className="hover:text-[#FFC26E] sm:text-[50px] lg:text-[40px] transition-all duration-300 cursor-pointer "
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        to={"https://github.com/priyankara88"}
        target="_blank"
        className="hover:text-[#FFC26E] sm:text-[50px]  lg:text-[40px] transition-all duration-300 cursor-pointer"
      >
        <RiGithubFill />
      </Link>
      <Link
        to={"https://www.facebook.com/priyankara.senarathne"}
        target="_blank"
        className="hover:text-[#FFC26E] sm:text-[50px] lg:text-[40px] transition-all duration-300 cursor-pointer"
      >
        <RiFacebookBoxLine />
      </Link>
    </>
    // </div>
  );
};

export default Social;
