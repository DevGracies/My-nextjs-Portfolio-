import { FaLocationArrow, FaX } from "react-icons/fa6";
import MagicButton from "../components/MagicButton";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative px-4 pt-32 pb-16 overflow-hidden bg-white dark:bg-zinc-900">
      {/* Subtle background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="absolute bottom-0 left-0 w-full h-72 opacity-20 object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-Ovo leading-tight max-w-3xl">
          Ready to take <span className="text-[#8E2DE2]">your</span> digital presence to the next level?
        </h1>

        <p className="mt-6 text-lg md:text-xl font-Ovo text-gray-600 dark:text-gray-300 max-w-2xl">
          Reach out to me today and let’s discuss how I can help you achieve your goals.
        </p>

        <a href="mailto:graceadegunle16@gmail.com" className="mt-8">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-300 dark:border-gray-700 pt-6">
        <p className="text-sm font-light font-Ovo text-gray-600 dark:text-gray-300">
          © 2024 Grace Adegunle. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/graceadegunle/" target="_blank">
            <FaLinkedin className="w-8 h-8 hover:scale-110 transition-transform fill-blue-600" />
          </a>
          <a href="https://x.com/_Devgracies" target="_blank">
            <FaX className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/devgracies/" target="_blank">
            <FaInstagram className="w-8 h-8 hover:scale-110 transition-transform fill-red-600" />
          </a>
          <a href="https://web.facebook.com/Degracies/?_rdc=1&_rdr#" target="_blank">
            <FaFacebook className="w-8 h-8 hover:scale-110 transition-transform fill-blue-700" />
          </a>
          <a href="https://wa.me/2349045954844" target="_blank">
            <FaWhatsapp className="w-8 h-8 hover:scale-110 transition-transform fill-green-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
