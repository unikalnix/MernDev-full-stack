import React from "react";
import Title from "./Title";
import Glow from "./Glow";
import {
  Facebook,
  Github,
  Inbox,
  Instagram,
  Linkedin,
  LocationEdit,
  Mail,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <div>
      <Glow bg="#7b4d2a" top="0" left="0" />
      <Glow bg="#4a2c63" mdLeft="50%" />
      <Title
        title="Get In Touch"
        paragraph="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
      />
      <div className="flex flex-col p-5 sm:flex-row sm:justify-between md:px-15">
        <div className="p-2 mb-10 flex-1">
          <h1 className="text-[#fafafa] text-xl font-semibold mb-5">
            Contact Information
          </h1>
          <div className="flex flex-col">
            <div className="flex gap-3 mb-5">
              <span className="bg-[#1414166b] flex items-center justify-center p-3 rounded-xl border-1 border-[#2E2E2F]">
                <Mail stroke="#f67655" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-[#fafafa] text-sm">Email</h3>
                <p className="text-[#a1a1aa] text-base">
                  hafizdaniyalshakeel@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-5">
              <span className="bg-[#1414166b] flex items-center justify-center p-3 rounded-xl border-1 border-[#2E2E2F]">
                <Inbox stroke="#f67655" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-[#fafafa] text-sm">Let's Talk</h3>
                <p className="text-[#a1a1aa] text-base">
                  Available for freelance work
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-5">
              <span className="bg-[#1414166b] flex items-center justify-center p-3 rounded-xl border-1 border-[#2E2E2F]">
                <LocationEdit stroke="#f67655" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-[#fafafa] text-sm">Location</h3>
                <p className="text-[#a1a1aa] text-base">Gujrat, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-[#fafafa] text-xl font-semibold mb-5">
              Connect With Me
            </h1>
            <div className="flex gap-3">
              <span
                onClick={() =>
                  window.open("https://github.com/unikalnix", "_blank")
                }
                className="bg-[#141416] flex items-center justify-center p-3 rounded-full border-1 border-[#2E2E2F] cursor-pointer hover:bg-[#f6755573] transition-all duration-200"
              >
                <Github />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hafiz-daniyal-shakeel-239441316/",
                    "_blank"
                  )
                }
                className="bg-[#141416] flex items-center justify-center p-3 rounded-full border-1 border-[#2E2E2F] cursor-pointer hover:bg-[#f6755573] transition-all duration-200"
              >
                <Linkedin />
              </span>
              <span
                onClick={() =>
                  window.open("https://instagram.com/mern._dev", "_blank")
                }
                className="bg-[#141416] flex items-center justify-center p-3 rounded-full border-1 border-[#2E2E2F] cursor-pointer hover:bg-[#f6755573] transition-all duration-200"
              >
                <Instagram />
              </span>
            </div>
          </div>
        </div>

        <div className="p-2 flex flex-col flex-1">
          <h1 className="text-[#fafafa] text-xl font-semibold mb-5">
            Send Me a Message
          </h1>
          <div className="flex flex-col mb-5">
            <label className="text-sm text-[#fafafa] mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="outline-none bg-[#1414167b] px-4 py-3 rounded-lg border-1 border-[#2C2C2D]"
              type="text"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-sm text-[#fafafa] mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="outline-none bg-[#1414167b] px-4 py-3 rounded-lg border-1 border-[#2C2C2D]"
              type="text"
              name="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-sm text-[#fafafa] mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="outline-none bg-[#1414167b] px-4 py-3 rounded-lg border-1 border-[#2C2C2D]"
              rows={10}
              type="text"
              name="message"
              placeholder="Hello, I'd like to talk about..."
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <button className="flex items-center justify-center cursor-pointer relative px-6 py-2.5 rounded-3xl text-white text-[14px] font-semibold overflow-hidden border-2 border-transparent z-10  w-full sm:w-auto">
              <span className="relative z-20 flex gap-3">
                Send Message{" "}
                <span>
                  <Send width={15} />
                </span>
              </span>
              <span className="absolute inset-[-1px] rounded-3xl bg-[linear-gradient(_#DB6E55,_#360e36)]"></span>
              <span className="absolute inset-[1px] bg-black rounded-3xl"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
