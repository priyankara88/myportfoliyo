import { Link } from "react-router-dom";
import Button from "../component/Button";
import MyImage from "../component/MyImage";
import Particale from "../component/Particale";
import Social from "../component/Social";

const Home = () => {
  return (
    <>
      <Particale />

      <div className=" h-screen">
        <div className="absolute flex items-center px-16 xl:px-0 xl:h-[98px]  xl:pl-40 w-full">
          <div className="container mx-auto  ">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 xl:pr-40">
              {/* logo */}
              <Link to={"/"}>img</Link>
              {/* social media */}
              <div>
                <Social />
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-screen bg-gradient-to-r  ">
          <div className="pt-20 text-center flex flex-col justify-center  xl:pt-40 xl:text-left  container mx-auto">
            <h1 className="xl:pl-40 "> Helo,It's Me</h1>
            <h1 className="w-screen text-[50px] text-white font-bold xl:pl-40 mt-5">
              Priyankara <span className="text-red-600">Senarathne</span> <br />
            </h1>

            <p className="w- full xl:pl-40 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-5">
              GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
            </p>
            <div className="xl:pl-40">
              <Button />
            </div>
          </div>
          <div className="bg-none w-[1200px] h-full absolute right-0 bottom-0 xl:bg-background  ">
            <div className=" flex w-full h-screen items-center justify-center max-w-[400px] max-h-[550px] absolute -botton-32 lg:bottom-0 lg:right-[8%]  right-0 bottom-0 ">
              <MyImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
