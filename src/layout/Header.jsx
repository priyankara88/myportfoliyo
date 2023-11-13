import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const NaviGationData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/About", icon: <HiUser /> },
  { name: "Projects", path: "/Projects", icon: <HiViewColumns /> },
  { name: "Cotact", path: "/Contact-Us", icon: <HiEnvelope /> },
  // { name: "dd", path: "/dd", icon: <HiChatBubbleBottomCenterText /> },
  // { name: "ff", path: "/ff", icon: <HiRectangleGroup /> },
];

const Header = () => {
  const iLocation = useLocation();
  console.log("iLocation", iLocation);
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed   h-max bottom-0 mt-auto xl:right-[2%] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen  z-50">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full border-[0.5px] border-[#BFC7D2]">
        {NaviGationData.map((links, index) => {
          return (
            <Link key={index} to={links.path}>
              <div
                className={`relative flex items-center group hover:text-[#FFC26E] transition-all duration-300 text-[#BFC7D2]  ${
                  links.path === iLocation.pathname ? "text-[#FFC26E]" : ""
                }`}
              >
                <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                  <div className="bg-[#FFC26E] relative flex text-black  items-center p-[6px] rounded-[3px] ">
                    <div className="text-[12px] leading-none font-semibold capitalize">
                      {links.name}
                    </div>
                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-8 absolute -right-4 "></div>
                  </div>
                </div>
                {links.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
