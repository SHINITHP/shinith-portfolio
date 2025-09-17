import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "TypeScript",
    "Bootstrap",
    "css",
  ];

  const backendSkills = ["Node.js", "Express", "AWS", "MongoDB", "PostgreSQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl py-8 px-4 md:px-8 border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <ul className="list-disc list-inside text-gray-300 space-y-4 md:space-y-6 text-sm md:text-[15px]">
              <li>
                <strong className="text-md md:text-[16px]"> MERN Stack Enthusiast </strong> - Skilled in
                JavaScript, TypeScript, React, Node.js, and MongoDB, building
                seamless web apps.
              </li>
              <li>
                <strong className="text-md md:text-[16px]"> Project-Driven Innovator </strong> - Built a dynamic
                e-commerce platform and an ongoing e-learning system.
              </li>
              <li>
                <strong className="text-md md:text-[16px]"> Quick Learner </strong> - Mastered MERN stack, APIs,
                and Git in Brocamp&apos;s intensive 6-month training.
              </li>
              <li>
                <strong className="text-md md:text-[16px]"> Collaborative Problem Solver </strong> -Thrive in team
                settings, turning complex challenges into elegant, scalable
                applications.
              </li>
              <li>
                <strong className="text-md md:text-[16px]"> Future-Focused Developer </strong> -Eager to join a
                dynamic tech team, bringing fresh ideas and a commitment to
                building impactful solutions.
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl pt-6  md:py-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl py-0 md:py-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="py-8 px-4 md:px-8 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    Diploma in Software Engineering | Nirmalagiri College,
                    Kannur | 2023
                  </h4>

                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm mt-3 ml-4">
                    <li>
                      Learned programming fundamentals, .Net, and software development principles.
                    </li>
                    <li>
                      Mastered through coursework, practical labs, and collaborative projects (85% score).
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">
                    Full Stack Development (MERN Stack) | Brototype Institute | 2024–2025
                  </h4>

                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm mt-3 ml-4">
                    <li>
                      Mastered JavaScript, TypeScript, React, Node.js, MongoDB, Tailwind css, Redux and RESTful APIs.
                    </li>
                    <li>
                      Learned via intensive hands-on training, real-world projects, and peer collaboration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-8 px-4 md:px-8 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 💼 Project </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    E-Commerce Platform | Node.js, Express, Bootstrap, EJS | 3
                    Months
                  </h4>

                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm mt-3 ml-4">
                    <li>
                      Built a full-fledged online store with product listings,
                      search, cart, checkout, and user authentication.
                    </li>
                    <li>
                      Designed responsive UI with Bootstrap and optimized
                      performance with RESTful APIs.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">
                    E-Learning Platform (Ongoing) | MERN Stack | 3 Months{" "}
                  </h4>

                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm mt-3 ml-4">
                    <li>
                      Developing a user-friendly platform for course management
                      and progress tracking.
                    </li>
                    <li>
                      Leveraging React for dynamic UI and MongoDB for efficient
                      data storage.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
