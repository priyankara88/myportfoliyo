import {
  RiFacebookBoxLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    // <div className="absolute  flex text-white items-center justify-center gap-x-5 z-50 cursor-pointer">
    <div className="flex flex-row">
      {/*  max-lg:text-[3rem] */}
      <Link
        key={1}
        to={"https://www.linkedin.com/in/priyankara-senarathne/"}
        target="_blank"
        className="hover:text-[#FFC26E] text-white transition-all duration-300 cursor-pointer "
      >
        <RiLinkedinBoxFill className="text-[5rem] lg:text-[3rem]" />
      </Link>
      <Link
        to={"https://github.com/priyankara88"}
        target="_blank"
        className="hover:text-[#FFC26E] text-white  transition-all duration-300 cursor-pointer"
      >
        <RiGithubFill className="text-[5rem]   lg:text-[3rem] " />
      </Link>
      <Link
        to={"https://www.facebook.com/priyankara.senarathne"}
        target="_blank"
        className="hover:text-[#FFC26E] text-white  transition-all duration-300 cursor-pointer"
      >
        <RiFacebookBoxLine className="text-[5rem]   lg:text-[3rem] " />
      </Link>
    </div>
    // </div>
  );
};

export default Social;
