import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";


const Projects = () => {
  const projects = [
    {
      title: "NextGen OMS",
      description:
        "NextGen OMS is a professional-grade Order Management System designed for equity markets. It supports real-time FIX 5.0 SP2 order routing, market data via FAST protocol, and scalable microservice communication using Redis..",
      tags: ["React", "TailwindCSS", "C#", "ExpressJs", 'websocket', 'redis'],
      video: "https://www.youtube.com/embed/nx1e9RPnECE?si=0y4hnPiczYVCXTM1",
      github: "https://github.com/khokan/stock-trading-mini",
      // live: "https://study-hub-khokan.web.app",
    },
     {
      title: "Study Hub",
      description:
        "StudyHub is a platform where students can discover and join local study groups (e.g., math clubs, science circles, language exchange) or create their own. It encourages social engagement through shared learning goals, helping people build communities around their academic passions.",
      tags: ["React", "MongoDB", "TailwindCSS", "JWT", "Firebase", "ExpressJs", 'sslcommerz', 'stripe'],
      image: "https://i.ibb.co.com/LXJKNn9M/study-hub.jpg",
      github: "https://github.com/khokan/study-hub",
      live: "https://study-hub-khokan.web.app",
    },
     {
      title: "Athletic Hub",
      description:
        "AthleticHub is a platform where fitness enthusiasts can discover and join local workout groups (e.g., running clubs, yoga classes, cycling teams) or create their own. It encourages social engagement through shared fitness goals, helping people build communities around their athletic passions.",
      tags: ["React", "MongoDB", "TailwindCSS", "JWT", "Firebase", "ExpressJs"],
      image: "https://i.ibb.co.com/Bkmv3Pv/athletic-hub.jpg",
      github: "https://github.com/khokan/athletic-hub",
      live: "https://athletic-hub.web.app",
    },
    {
      title: "Hobby Hub",
      description:
        "HobbyHub is a platform where people can discover and join local hobby-based groups (e.g., book clubs, hiking crews, painting circles) or create their own. It encourages social engagement through shared interests, helping people build communities around their passions.",
      tags: ["React", "MongoDB", "TailwindCSS", "daisyui", "Firebase", "ExpressJs"],
      image: "https://i.ibb.co/27KpFm8p/Feature.png",
      github: "https://github.com/khokan/hobby-hub-client",
      live: "https://hobby-hub-khokon.web.app",
    }
  ];

  return (
    <section id="projects" className="py-5 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent works. Each project was built to solve
            specific problems and improve my skills.
          </p>
        </div>

        {/* Project Grid */}
    <div className="flex flex-col gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="relative group flex flex-col md:flex-row items-stretch bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Media (Image or Video) */}
      <div className="md:w-1/2 h-58 overflow-hidden">
        {index === 0 ? (
         <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={project.video}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      ></iframe>
    </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-5 flex flex-col justify-between">
        <div>
          <div className="text-xl font-bold mb-2 text-white">
            {project.title}
          </div>
          <div className="text-slate-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-700 text-slate-200 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors duration-200"
          >
            <FiGithub className="mr-2" />
            Code
          </a>
          {index !== 0 && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg text-sm transition-colors duration-200"
          >
            <FiExternalLink className="mr-2" />
            Live Demo
          </a>)}
        </div>
      </div>
    </div>
  ))}
</div>


        {/* GitHub CTA */}
        <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
        <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          Check out my GitHub profile for more projects, contributions, and code samples.
        </p>
        <a
          href="https://github.com/khokan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          <FaGithub size={20} />
          View GitHub Profile
        </a>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Projects;
