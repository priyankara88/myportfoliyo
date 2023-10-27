import {
  RiFacebookBoxLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="flex text-white items-center gap-x-5 text-lg z-50 cursor-pointer">
      <Link
        key={1}
        href={"/"}
        className="hover:text-rose-600 text-[30px] transition-all duration-300 cursor-pointer "
      >
        <RiLinkedinBoxFill sx={{ hover: "#fff" }} />
      </Link>
      <Link
        to={"/"}
        className="hover:text-rose-600 text-[30px]  transition-all duration-300 cursor-pointer"
      >
        <RiGithubFill />
      </Link>
      <Link
        to={"/"}
        className="hover:text-rose-600 text-[30px]  transition-all duration-300 cursor-pointer"
      >
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};

export default Social;
