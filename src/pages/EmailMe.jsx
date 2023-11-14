import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailMe = () => {
  const form = useRef();
  const NameRef = useRef();
  const EmailRef = useRef();
  const MessageRef = useRef();
  const [nameVal, setNameVal] = useState(1);
  const [emailVal, setEmailVal] = useState(1);
  const [messageVal, setMessageVal] = useState(1);

  const sendEmail = (e) => {
    // const [inputData, setInputData] = useState();

    const iName = NameRef.current.value;
    const iEmail = EmailRef.current.value;
    const iMessage = MessageRef.current.value;

    e.preventDefault();

    if (iName == "") {
      setNameVal(0);
    } else if (iEmail == "") {
      setEmailVal(0);
    } else if (iMessage == "") {
      setMessageVal(0);
    } else {
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
    }
  };

  const InputChange = (name) => {
    console.log("name", name.name);
    if (name.name == "to_name") {
      setNameVal(1);
    }
    if (name.name == "from_name") {
      setEmailVal(1);
    }

    if (name.name == "message") {
      setMessageVal(1);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="w-full flex flex-col ">
        <p
          className={`${
            nameVal == 0
              ? "flex w-11 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2 text-red-600 "
              : "flex w-11 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2"
          } `}
        >
          Name
        </p>
        <input
          ref={NameRef}
          onChange={(e) => InputChange(e.target)}
          placeholder="Enter Your Name"
          className="z-0 border-2 border-[#BFC7D2] bg-[#10151d] outline-none py-1  w-[220px] sm:w-[300px]  md:w-[450px] rounded-md text-center"
          type="text"
          name="to_name"
        />
        <p
          className={`${
            emailVal == 0
              ? "flex w-9 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2 text-red-600"
              : "flex w-9 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2 "
          }`}
        >
          Email
        </p>
        <input
          ref={EmailRef}
          onChange={(e) => InputChange(e.target)}
          placeholder="Enter Your Email"
          className="z-0 border-2 border-[#BFC7D2] bg-[#10151d] outline-none py-1  w-[220px] sm:w-[300px] md:w-[450px] rounded-md text-center"
          type="email"
          name="from_name"
        />
        <p
          className={`${
            messageVal == 0
              ? "flex w-16 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2 text-red-600"
              : "flex w-16 items-start justify-start z-10 ml-2  bg-[#10151d] -mb-2 "
          } `}
        >
          Message
        </p>
        <textarea
          ref={MessageRef}
          onChange={(e) => InputChange(e.target)}
          placeholder="Message"
          className="z-0 border-2 border-[#BFC7D2] bg-[#10151d] outline-none py-1  w-[220px] sm:w-[300px] md:w-[450px] rounded-md text-center"
          name="message"
        />
      </div>
      <div className="w-full flex items-center justify-center ">
        <input
          className="item-center px-8 mt-4 bg-slate-800 rounded-md border border-[#BFC7D2] cursor-pointer"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
};
