import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // const [inputData, setInputData] = useState();

    e.preventDefault();

    emailjs
      .sendForm(
        "service_yn6lls7",
        "template_9ojpvpq",
        form.current,
        "ncaVFi7j-r2V2Iyz8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="w-full flex flex-col ">
        <p className="flex w-11 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2">
          Name
        </p>
        <input
          placeholder="Enter Your Name"
          className="z-0 border-2 border-[#BFC7D2] bg-[#10151d] outline-none py-1  w-[220px] sm:w-[300px]  md:w-[450px] rounded-md text-center"
          type="text"
          name="to_name"
        />
        <p className="flex w-9 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2">
          Email
        </p>
        <input
          placeholder="Enter Your Email"
          className="z-0 border-2 border-[#BFC7D2] bg-[#10151d] outline-none py-1  w-[220px] sm:w-[300px] md:w-[450px] rounded-md text-center"
          type="email"
          name="from_name"
        />
        <p className="flex w-16 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2 ">
          Message
        </p>
        <textarea
          placeholder="Message"
          className="z-0 border-2 border-[#BFC7D2] bg-[#10151d] outline-none py-1  w-[220px] sm:w-[300px] md:w-[450px] rounded-md text-center"
          name="message"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <input
          className="item-center px-8 mt-4 bg-slate-800 rounded-md border border-[#BFC7D2]"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
};
