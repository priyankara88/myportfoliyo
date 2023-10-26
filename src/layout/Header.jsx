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
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "Cotact", path: "/Cotact", icon: <HiUser /> },
  { name: "aa", path: "/aa", icon: <HiViewColumns /> },
  { name: "ss", path: "/ss", icon: <HiRectangleGroup /> },
  { name: "dd", path: "/dd", icon: <HiChatBubbleBottomCenterText /> },
  { name: "ff", path: "/ff", icon: <HiEnvelope /> },
];

const Header = () => {
  const iLocation = useLocation();
  console.log("iLocation", iLocation);
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed   h-max bottom-0 mt-auto xl:right-[2%] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen  z-50">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {NaviGationData.map((links, index) => {
          return (
            <Link key={index} to={links.path}>
              <div
                className={`${
                  links.path === iLocation.pathname
                    ? "text-rose-600"
                    : console.log("gggg", links.path)
                }`}
              >
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
