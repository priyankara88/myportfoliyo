import { useEffect, useState } from "react";
import TimeLine from "./TimeLine";
import Skillsub from "./Skillsub";
import Nbqsa from "../assets/img/myNbqsa.png";

const Skils = () => {
  const [openTab, setOpenTab] = useState(1);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setOpenTab((prevTab) => (prevTab % 3) + 1); // Switch to the next tab (1, 2, 3)
  //     }, 4000); // Change tabs every 3 seconds

  //     return () => clearInterval(interval); // Clear the interval when the component unmounts
  //   }, []);
  return (
    <div className="fixed h-screen z-10 w-full flex justify-center items-center">
      <div className="file-explor max-md:w-[90vw] md:w-[70vw] h-[50vh] backdrop-blur-md border rounded-lg shadow-2xl !border-gray-700">
        <div className="top-section w-full h-10 gap-4 rounded-t-lg bg-gradient-to-r from-[#3b3b3b00] via-[#35353575] to-[#3b3b3b00] backdrop-blur-lg flex items-center justify-start">
          <div className="round-btn flex h-full ml-5 gap-2 justify-start items-center">
            <span className="w-5 h-5 rounded-full border !border-[#9b6d6d]"></span>
            <span className="w-5 h-5 rounded-full border !border-[#94996a]"></span>
            <span className="w-5 h-5 rounded-full border !border-[#6b9767]"></span>
          </div>
          <div className="tabs gap-5 flex md:ml-10 ">
            <ul className="flex flex-row gap-5   space-y-2 md:space-x-2 md:flex-row md:space-y-0">
              <li>
                <button
                  onClick={() => setOpenTab(1)}
                  className={` ${
                    openTab === 1
                      ? "md:bg-gradient-to-b from-[#3b3b3b00] to-[#29292975] !border-gray-700 border-x  text-white"
                      : ""
                  }  text-gray-600 rounded-t`}
                >
                  Experiance
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenTab(2)}
                  className={` ${
                    openTab === 2
                      ? "md:bg-gradient-to-b from-[#3b3b3b00] to-[#29292975] !border-gray-700 border-x  text-white"
                      : ""
                  }  text-gray-600 rounded-t`}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenTab(3)}
                  className={` ${
                    openTab === 3
                      ? "md:bg-gradient-to-b from-[#3b3b3b00] to-[#29292975] !border-gray-700 border-x  text-white"
                      : ""
                  }  text-gray-600 rounded-t`}
                >
                  Awards
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom p-5 h-full bg-gradient-to-b  from-[#35353575] to-[#3b3b3b00]">
          <div className={openTab === 1 ? "block" : "hidden"}>
            <TimeLine />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            <Skillsub />
          </div>
          <div className={openTab === 3 ? "block" : "hidden"}>
            <div className="w-full  flex flex-col items-center justify-center  relative overflow-hidden ">
              <p className="text-[#FFC26E] font-semibold mt-5 text-center">
                "National ICT Awards 2014 InHouse Category Glod winner-Sri
                Lanka"
              </p>
              {/* <div className="w-full "> */}
              {/* <div className="w-full flex items-center justify-center"> */}
              <img
                className="mt-2 w-full h-48 object-cover overflow-y-auto items-center justify-center bg-no-repeat  bg-cover"
                src={Nbqsa}
                alt="MyNbqsa"
              />
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
