import { Globe } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 font-sans pt-5 sm:pt-0">
      <section id="about" className="relative z-10 py-5 lg:py-5 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold lg:text-center mb-6 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className=" gap-12 items-stretch">
            {/* Left Column: Description + Highlights */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed tracking-wide">
                I'm <strong className="text-white">Mohamamd Sakhawat Hossain</strong> a software developer with over <strong>20</strong> years of experience, 
                starting with desktop application development using  <strong className="text-cyan-400">VC++ (MFC) and .NET</strong>. 
                In recent years, I transitioned to web development, initially with  <strong className="text-cyan-400">ASP.NET and ASP.NET Core</strong>, 
                and now work extensively with  <strong className="text-purple-400">React and Next.js</strong>. I'm passionate about building fast, modern web applications 
                and am especially interested in <strong className="text-green-400">real-time data handling using socket programming for fintech platforms. </strong> 
                My background in <strong className="text-orange-400">both desktop and web technologies</strong> allows me to create reliable, scalable solutions 
                that blend the robustness of traditional systems with the flexibility of the modern web.
              </p>
             
            </div>

            <div className="py-10 lg:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mt-1">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Bachelor and Masters in Computer Science
                  </h3>
                  <p className="text-gray-300">
                   University Of Pune (India)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-xl flex items-center justify-center mt-1">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Chittagong Stock Exchange PLC
                  </h3>
                  <p className="text-gray-300">2010 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Right Column: Experience Badge */}
            {/* <div className="flex-1 w-full flex items-center justify-center">
              <div className="w-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center py-10 px-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                    <Globe size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">10+ Years</h3>
                  <p className="text-slate-200 text-base">Development Experience</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
