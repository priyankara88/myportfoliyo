import { Link } from "react-router-dom";
import Particale from "../component/Particale";
import Social from "../component/Social";
import MobileContacts from "../component/contacts/MobileContacts";

const Contact = () => {
  return (
    <>
      <Particale />
      <div className=" h-full w-full  ">
        <div className="absolute   flex items-center px-16 xl:px-0 xl:h-[98px]  xl:pl-40 w-full">
          <div className="container mx-auto  ">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 xl:pr-40">
              {/* logo */}
              <Link
                to={"/"}
                className="text-white font-semibold  text-[20px]  lg:text-[30px] "
              >
                MGPS
              </Link>
              {/* social media */}
              <div className="relative flex items-center justify-center z-0 ">
                <Social />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] ">
          <MobileContacts />
        </div>
        {/* <div className="w-full hidden xl:flex xl:items-center xl:justify-center xl:mt-[500px]">
          <p className="absolute text-white">
            Copy Rights © Priyankara Senarathne-2023{" "}
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
