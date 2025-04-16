import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-28 border border-b-gray-200">
      <div className="flex justify-between  mx-8 py-6">
        <div className="md:flex flex-row items-center gap-5">
          <p>2024 Devtask.</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex items-center gap-6">
          <FaXTwitter className="rounded-full " />
          <CiInstagram />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
      <div className="md:flex flex-row justify-between items-center gap-5 border border-b-gray-200 px-8 py-5">
        <p>
          Made by
          <span className="text-Tertiary text-sm font-medium">Riffmax</span> &
          Powered by
          <span className="text-Tertiary text-sm font-medium">Webflow</span>
        </p>
        <div className="flex  items-center md:gap-5 gap-2">
          <p>Style Guide</p>
          <p>Instruction</p>
          <p>Changelog</p>
          <p>Lienceses</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
