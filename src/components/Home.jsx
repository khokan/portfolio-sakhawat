"use client";
import { FaReact, FaJs, FaGithub, FaAws, FaCss3Alt } from "react-icons/fa";
import {
  SiFirebase,
  SiTypescript,
  SiApollographql,
  SiVercel,
} from "react-icons/si";
import { motion } from "framer-motion";
import { VscChevronDown } from "react-icons/vsc";
import { Download, Star } from "lucide-react";
import sakhawatImg from "../assets/profile-img.jpeg";
const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden pt-5 sm:pt-0"
      >
        {/* Blurry Circles Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-20">
            <motion.div
              className="sm:absolute sm:top-1/4 sm:left-1/4 md:w-48 md:h-48 sm:w-72 sm:h-72 sm:bg-blue-600 sm:rounded-full sm:mix-blend-multiply sm:filter sm:blur-xl sm:opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6,
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-11/12 sm:w-10/12 lg:w-9/12 mx-auto py-10 sm:py-20 gap-8 sm:gap-16 z-10">
          {/* Left Text Section */}
          <div>
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-medium">
                Hi, I'm Mohammad Sakhawat Hossain
              </p>
              <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Full-Stack{" "}
                </span>
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                Experienced IT professional with a Master’s degree in Computer
                Science and over 20 years of expertise in enterpriselevel
                applications, systems, and financial protocols. Proven track
                record in project management, software development, and seamless
                integration of trading systems
              </p>
            </div>

            <div className="flex gap-3 justify-center md:justify-start pt-2 sm:pt-4">
              {/* <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md text-white font-medium hover:shadow-lg hover:from-cyan-500 hover:to-blue-600 transition duration-300 cursor-pointer text-sm sm:text-base"
              >
                View Projects
              </button> */}
              <a
                href="/sakhawat-resume.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                download
              >
                <span className="flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-md text-cyan-400 font-medium hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Orbit Icons Section - Hidden on small mobile */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="w-64 h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-4 border-cyan-400/30">
                <img
                  src={sakhawatImg}
                  alt=""
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <Star className="text-white" size={32} />
            </div> */}
            {/* <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full animate-pulse"></div> */}
          </div>
        </div>

        {/* Scroll Button */}
        <div className="absolute bottom-6 sm:bottom-10 animate-bounce z-10 ">
          <button
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="p-1 sm:p-2 rounded-full bg-gray-800/80 border border-gray-700 hover:border-cyan-400 group transition-all duration-300 cursor-pointer"
            aria-label="Scroll to skills section"
          >
            <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
              <VscChevronDown size={20} className="sm:w-6 sm:h-6" />
            </div>
          </button>
        </div>
      </section>
      
      
    </>
  );
};

export default Home;
