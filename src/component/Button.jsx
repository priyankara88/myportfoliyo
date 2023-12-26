import { Link } from "react-router-dom";

import Priyankarasenarathne from "./../assets/cv/Priyankara Senarathne_CV 2023.pdf";

const Button = () => {
  const DownloadCv = () => {
    const link = document.createElement("a");
    link.download = "PriyankaraSenarathne";

    link.href = Priyankarasenarathne;

    link.click();
  };

  return (
    <div
      onClick={DownloadCv}
      className="flex items-center justify-center  p-[1px]  bg-white  absolute rounded-lg shadow-[0px_0px_50px_-12px] shadow-[#ffa23e] "
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
