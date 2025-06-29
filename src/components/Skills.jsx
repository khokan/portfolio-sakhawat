import { div } from "framer-motion/client";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNextdotjs,
  SiReactrouter,
  SiVercel,
  SiBootstrap,
  SiDotnet,
  SiDevexpress,
  SiSqlalchemy,
  SiJira,
} from "react-icons/si";
import { TbTools, TbServer, TbDeviceDesktopCode } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <TbDeviceDesktopCode className="text-blue-500" size={24} />,
      borderColor: "#3b82f6",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-[#e34c26]" size={36} />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-[#264de4]" size={36} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" size={36} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" size={36} />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-[#7952b3]" size={36} />,
        },
        {
          name: "React",
          icon: <FaReact className="text-[#61DAFB]" size={36} />,
        },
        {
          name: "React Router",
          icon: <SiReactrouter className="text-[#CA4245]" size={36} />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black" size={36} />,
        },
      ],
    },
    {
      name: "Backend",
      icon: <TbServer className="text-green-500" size={24} />,
      borderColor: "#22c55e",
      skills: [
        {
          name: "C#",
          icon: <SiDotnet className="text-[#512BD4]" size={36} />,
        },
        {
          name: "ASP.NET Core",
          icon: <SiDotnet className="text-[#512BD4]" size={36} />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-[#339933]" size={36} />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-black" size={36} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248]" size={36} />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-[#FFCA28]" size={36} />,
        },
      ],
    },
    {
      name: "Tools",
      icon: <TbTools className="text-purple-500" size={24} />,
      borderColor: "#8b5cf6",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-[#F05032]" size={36} />,
        },
        { name: "GitHub", icon: <FaGithub className="text-black" size={36} /> },
        { name: "Vercel", icon: <SiVercel className="text-black" size={36} /> },
        {
          name: "VSCode",
          icon: <VscVscode className="text-[#007ACC]" size={36} />,
        },
        {
          name: "Jira",
          icon: <SiJira className="text-[#0052CC]" size={36} />, // Atlassian blue
        },
        {
          name: "SQL Server",
          icon: <SiSqlalchemy className="text-[#CC2927]" size={36} />, // MS red
        },
        {
          name: "DevExpress",
          icon: <SiDevexpress className="text-[#FF7200]" size={36} />, // DevExpress orange
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16 sm:pt-0">
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Technical Stack
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Comprehensive full-stack development capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Column */}
            <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
                <TbDeviceDesktopCode className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">
                  Frontend Development
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4 p-6">
                {skillCategories[0].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-3 hover:bg-white rounded-lg transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2 hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white hover:text-black text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Column */}
            <div className=" rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-gray-200">
                <TbServer className="text-green-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">
                  Backend Development
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                {skillCategories[1].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-3 hover:bg-white  rounded-lg transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2 hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white hover:text-black text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Column */}
            <div className=" rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-4 border-b border-gray-200">
                <TbTools className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">
                  Development Tools
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                {skillCategories[2].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-3 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2 hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white hover:text-black text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
