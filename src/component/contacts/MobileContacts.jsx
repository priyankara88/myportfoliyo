import { useState } from "react";
import { FaMobileAlt, FaRegAddressCard, FaMapMarkerAlt } from "react-icons/fa";
import { EmailMe } from "../../pages/EmailMe";

const MobileContacts = () => {
  const [selextedTab, setSelectedTab] = useState("Telephone");
  const ClickTab = (value) => {
    // console.log("tab click", e.target.parentElement.id);
    setSelectedTab(value);
  };

  return (
    <div>
      <div className="flex flex-col w-full h-full relative top-40 p-2 md:pl-40 md:pr-40 ">
        <div className="w-full flex-col lg:flex-row  flex flex-wrap ">
          <div className=" flex  w-full justify-between">
            <div
              onClick={() => ClickTab("Telephone")}
              className={`${
                selextedTab == "Telephone"
                  ? "border-b-transparent w-[550px] border border-gray-300  rounded-t-md p-1 text-[#FFC26E]"
                  : " w-[550px] border border-gray-300  rounded-t-md p-1 text-[#FFC26E]"
              } `}
            >
              <span className="group flex justify-center items-center gap-1 cursor-pointer">
                <FaMobileAlt />
                Telephone
              </span>
            </div>
            <div
              onClick={() => ClickTab("Address")}
              className={`${
                selextedTab == "Address"
                  ? "border-b-transparent w-[550px] border border-gray-300  rounded-t-md p-1 text-[#FFC26E]"
                  : " w-[550px] border border-gray-300  rounded-t-md p-1 text-[#FFC26E]"
              } `}
            >
              <span className="flex justify-center items-center gap-1 cursor-pointer">
                <FaRegAddressCard />
                Address
              </span>
            </div>
            <div
              onClick={() => ClickTab("Message-Me")}
              className={`${
                selextedTab == "Message-Me"
                  ? " border-b-transparent w-[550px] border border-gray-300 rounded-t-md p-1 text-[#FFC26E] "
                  : "w-[550px] border border-gray-300  rounded-t-md p-1 text-[#FFC26E]"
              }`}
            >
              <span className="flex justify-center items-center gap-1 cursor-pointer">
                <FaMapMarkerAlt />
                Message-Me
              </span>
            </div>
          </div>

          <div className="w-full p-10 flex items-center justify-center border border-gray-300 text-[#FFC26E] rounded-b-md border-t-transparent ">
            {selextedTab == "Telephone" ? (
              <div>004915204570431</div>
            ) : selextedTab == "Address" ? (
              <div>Stuttgart</div>
            ) : selextedTab == "Message-Me" ? (
              <div className="w-full flex items-center justify-center ">
                <EmailMe />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContacts;
