import { Globe } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16 sm:pt-0">
      {/* About Section */}
      <section id="about" className="relative z-10 py-10 lg:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold lg:text-center mb-4 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex gap-12 items-stretch flex-col lg:flex-row">
            <div className="flex-1 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <strong className="text-white">Md Arif Uddin</strong>, a
                passionate Full-Stack MERN Developer from 🇧🇩 South Asia.
                Currently working on{" "}
                <strong className="text-cyan-400">EduCore</strong>, learning{" "}
                <strong className="text-purple-400">Next.js</strong>, and
                exploring{" "}
                <strong className="text-green-400">MongoDB Aggregation</strong>,
                advanced{" "}
                <strong className="text-orange-400">Firebase Auth</strong>, and
                performance optimization in React.
              </p>
              <div className="space-y-4">
                {[
                  "🔭 Working on EduCore (Course Management System)",
                  "🌱 Learning Next.js and SSR",
                  "🚀 Exploring Firebase + MongoDB aggregation",
                  "💡 Always eager to learn new things",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex-1 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center py-4">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                  <Globe size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">10+ Years</h3>
                <p className="text-gray-300">Development Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
