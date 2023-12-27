import { Link } from "react-router-dom";
import Button from "../component/Button";
import MyImage from "../component/MyImage";
import Particale from "../component/Particale";
import Social from "../component/Social";
import { motion } from "framer-motion";
import AnimatedText from "../component/AnimatedText";
const expanded = true;
const Home = () => {
  return (
    <>
      {/* <Particale /> */}
      <div className="w-screen h-screen">
        <div className="w-full p-14 flex flex-row items-center justify-between">
          <div className="flex items-center justify-center">
            <p className="text-[5rem] font-Carattere">Priyankara</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Social />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center overflow-hidden w-[20vh] h-[20vh] rounded-full border-2 border-gray-200">
            <MyImage />
          </div>
        </div>
      </div>
    </>
  );
};
// lg:bg-Back xl:bg-cover
export default Home;
