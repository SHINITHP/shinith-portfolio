import { RevealOnScroll } from "../RevealOnScroll";

const projectData = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with product listings, search, cart, checkout, and secure authentication.",
    technologies: ["Node.js", "Express", "HTML", "CSS", "Bootstrap", "EJS"],
    link: "https://github.com/SHINITHP/hexaShop.git"
  },
  {
    title: "E-Learning Platform (Ongoing)",
    description:
      "Interactive platform for course management, progress tracking, and dynamic user interfaces.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Typescript", "Redux", "Tailwind css"],
    link: "https://github.com/SHINITHP/learnzo-react-project.git"
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
