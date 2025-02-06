import { FaLocationArrow, FaX } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className=" text-3xl text-center font-bold font-Ovo lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className=" md:mt-10 my-5 text-xl font-semibold font-Ovo text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:graceadegunle16@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base  text-sm md:font-normal font-light font-Ovo ">
          Copyright©2024 Grace Adegunle
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <a href="https://www.linkedin.com/in/graceadegunle/" target="_blank">
            <FaLinkedin className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg fill-blue-600 " />
          </a>
          <a href="https://x.com/_Devgracies" target="_blank">
            <FaX className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg " />
          </a>
          <a href="https://www.instagram.com/devgracies/" target="_blank">
            <FaInstagram className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg fill-red-600" />
          </a>
          <a href="https://web.facebook.com/Degracies/?_rdc=1&_rdr#" target="_blank">
            <FaFacebook className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg fill-blue-700 " />
          </a>
          <a href="https://wa.me/2349045954844" target="_blank">
            <FaWhatsapp className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg fill-green-600 " />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
