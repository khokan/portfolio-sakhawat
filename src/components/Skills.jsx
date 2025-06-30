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
      name: "Frontend Development",
      icon: <TbDeviceDesktopCode className="text-cyan-400" size={24} />,
      bg: "from-slate-800 to-slate-700",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-[#e34c26]" size={36} /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#264de4]" size={36} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={36} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={36} /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952b3]" size={36} /> },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
        { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" size={36} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" size={36} /> },
      ],
    },
    {
      name: "Backend Development",
      icon: <TbServer className="text-green-400" size={24} />,
      bg: "from-slate-800 to-slate-700",
      skills: [
        { name: "C#", icon: <SiDotnet className="text-[#512BD4]" size={36} /> },
        { name: "ASP.NET Core", icon: <SiDotnet className="text-[#512BD4]" size={36} /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={36} /> },
        { name: "Express.js", icon: <SiExpress className="text-white" size={36} /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={36} /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" size={36} /> },
      ],
    },
    {
      name: "Development Tools",
      icon: <TbTools className="text-purple-400" size={24} />,
      bg: "from-slate-800 to-slate-700",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={36} /> },
        { name: "GitHub", icon: <FaGithub className="text-white" size={36} /> },
        { name: "Vercel", icon: <SiVercel className="text-white" size={36} /> },
        { name: "VSCode", icon: <VscVscode className="text-[#007ACC]" size={36} /> },
        { name: "Jira", icon: <SiJira className="text-[#0052CC]" size={36} /> },
        { name: "SQL Server", icon: <SiSqlalchemy className="text-[#CC2927]" size={36} /> },
        { name: "DevExpress", icon: <SiDevexpress className="text-[#FF7200]" size={36} /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-16 font-sans text-slate-100">
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Technical Stack
            </span>
          </h2>
          <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto text-lg">
            Comprehensive full-stack development capabilities
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-700 shadow-md overflow-hidden"
              >
                <div
                  className={`flex items-center px-6 py-4 bg-gradient-to-r ${category.bg} border-b border-slate-700`}
                >
                  <span className="mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
                    >
                      <div className="mb-2 hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Skills;
