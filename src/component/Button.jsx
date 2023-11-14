import { Link } from "react-router-dom";

const Button = () => {
  const DownloadCv = () => {
    console.log("Download CV");
    window.location.href = "./";
  };

  return (
    // <div className="pt-5 bg-white ">
    //   <div className=" line-color flex items-center justify-center lg:items-start lg:justify-start lg:pl-40 container mx-auto ">
    //     <div className=" cursor-pointer test px-[55px] py-[20px]  relative bg-[#10151d] text-[#BFC7D2] font-medium xl:text-center flex justify-center items-center md:items-start lg:text-center   rounded-lg shadow-[0px_0px_50px_-12px] shadow-[#ffa23e] ">
    //       Resume
    //     </div>
    //   </div>
    // </div>
    <div
      className="flex items-center justify-center  p-[1px]  bg-white  absolute rounded-lg shadow-[0px_0px_50px_-12px] shadow-[#ffa23e] "
      onClick={DownloadCv}
    >
      <div className="relative  lg:items-center lg:justify-center container mx-auto ">
        <div className="z-0 px-[54px] py-[20px]  line-color cursor-pointer  relative bg-[#10151d] text-[#BFC7D2] font-medium xl:text-center  md:items-start lg:text-center  md:justify-start rounded-lg  ">
          Resume
        </div>
      </div>
    </div>
  );
};

export default Button;
