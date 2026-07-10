import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-300 py-20 px-6 ">
      {/* 🎨 Radial Gradient Background */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Branding */}
        <div className="text-center md:text-left">
            {/* My name with Gradient color */}
          <h2 className="text-2xl font-bold bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#074173] via-[#1679ab] to-[#5debd7] bg-clip-text text-transparent tracking-wide">
            Arbaz Malik
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Frontend Developer & Problem Solver
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-pink-400 transition duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-400 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-pink-400 transition duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition duration-200" />
          </a>
          <a href="mailto:thetechzion@gmail.com">
            <FaEnvelope className="hover:text-green-400 transition duration-200" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-rose-500 transition duration-200" />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="hover:text-blue-600 transition duration-200" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Arbaz Malik. All rights reserved.
      </div>
    </footer>
  );
};

const WrappedFooter = SectionWrapper(Footer, "footer");
export default WrappedFooter;
