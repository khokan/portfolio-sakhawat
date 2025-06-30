import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  Pin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router"; // use 'next/link' if in Next.js
import logo from '/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-100 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Top Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Branding */}
            <div className="space-y-4">
              <Link
                to="/"
                className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform flex items-center gap-0 -ml-4"
              >
                {/* <ChevronLeft size={40} className="text-cyan-400" /> */}
               <img src={logo} className="w-32 h-32 object-contain" alt="" />
                {/* <ChevronRight size={40} className="text-purple-400" /> */}
              </Link>
              <p className="text-base text-slate-300">Full-Stack Developer</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Passionate about building scalable, modern web applications with clean and efficient code.
              </p>
            </div>

            {/* Quick Links */}
            {/* <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Projects", href: "/projects" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-slate-300 hover:text-cyan-400 transition duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div> */}

 {/* Social Icons */}
 <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm">Follow me:</span>
                {[
                  {
                    icon: Mail,
                    href: "mailto:khokon@gmail.com",
                    label: "Email",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/khokan",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/khokan77/",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative p-3 bg-white/10 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110"
                  >
                    <Icon
                      size={20}
                      className="text-slate-300 group-hover:text-white transition-colors"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur" />
                  </a>
                ))}
              </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Let's Connect</h3>
              <div className="space-y-3">
                <a
                  href="mailto:xossarif@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-cyan-400/20">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm">khokon@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Pin size={16} />
                  </div>
                  <span className="text-sm">Chittagong, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social + Scroll Button */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm text-slate-300 group-hover:text-white">
                  Back to Top
                </span>
                <ArrowUp
                  size={16}
                  className="text-slate-300 group-hover:text-white group-hover:-translate-y-1 transition"
                />
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-slate-400 flex justify-center items-center gap-2 flex-col sm:flex-row">
              © {new Date().getFullYear()} Mohammad Sakhawat Hossain.
              <Heart className="text-red-400 animate-pulse" size={14} />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
    </footer>
  );
};

export default Footer;
