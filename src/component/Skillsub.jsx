import {
  BiLogoReact,
  BiLogoVuejs,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  TbBrandNextjs,
  TbBrandFramerMotion,
  TbBrandLaravel,
  TbFileTypeSql,
} from "react-icons/tb";
import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { MdOutlineCss } from "react-icons/md";
import { SiMui, SiMysql } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";
import { BsMicrosoft } from "react-icons/bs";

const Skillsub = () => {
  //w-full sm:overflow-y-auto sm:flex sm:flex-col md:max-lg:flex md:max-lg:flex-row md:max-lg:justify-between
  return (
    <div className="w-full flex flex-col   sm:flex sm:flex-row">
      <div className="overflow-y-hidden">
        <p className="text-[#FFC26E]">Front-End</p>
        <div className="w-full grid grid-cols-2   gap-1 p-4 ">
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            ReactJS
            <BiLogoReact className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            NextJS
            <TbBrandNextjs className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            VueJS
            <BiLogoVuejs className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            Javascript
            <BiLogoJavascript className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            HTML
            <AiFillHtml5 className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            CSS
            <MdOutlineCss className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            Tailwind css
            <BiLogoTailwindCss className="mt-1 text-[#FFC26E]" />
          </p>

          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            MUI
            <SiMui className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            Fremer Motion
            <TbBrandFramerMotion className="mt-1 text-[#FFC26E]" />
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#FFC26E]">Back-End</p>
        <div className="w-full grid max-md:grid-cols-1 max-lg:grid-cols-1 grid-cols-2 gap-1 p-4 ">
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            NodeJS
            <BiLogoNodejs className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            Asp.Net
            <BsMicrosoft className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            Laravel
            <TbBrandLaravel className="mt-1 text-[#FFC26E]" />
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#FFC26E]"> DataBase</p>
        <div className="w-full grid max-md:grid-cols-1 max-lg:grid-cols-1 grid-cols-2 gap-1  p-4">
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            MSSQL
            <TbFileTypeSql className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            MySql
            <SiMysql className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            MongoDB
            <BiLogoMongodb className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            FireBase
            <BiLogoFirebase className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex items-center justify-center flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            Postgre
            <BiLogoPostgresql className="mt-1 text-[#FFC26E]" />
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#FFC26E]">Tools</p>
        <div className="w-full grid max-md:grid-cols-1 max-lg:grid-cols-1 grid-cols-2 gap-1 p-4 ">
          <p className="gap-1 flex flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            GitHub
            <AiFillGithub className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            GitLab
            <AiFillGitlab className="mt-1 text-[#FFC26E]" />
          </p>
          <p className="gap-1 flex flex-row border rounded-lg shadow-2xl !border-gray-700 p-1 text-[#BFC7D2]">
            TFS
            <RiTeamLine className="mt-1 text-[#FFC26E]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skillsub;
