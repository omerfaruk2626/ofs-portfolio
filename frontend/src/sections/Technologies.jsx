import React from "react";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white snap-start px-6"
    >
      <h2 className="text-5xl font-bold mb-6 text-purple-400">
        Technologies & Skills
      </h2>

      <p className="text-lg text-gray-300 text-center max-w-2xl">
        I specialize in **developing modern, scalable, and user-friendly** web
        applications. My focus is on **creating seamless digital experiences**
        by leveraging the latest technologies and best practices.
      </p>

      <div className="mt-8 w-50">
        <h3 className="text-3xl font-semibold text-white mb-4 text-center">
          Technical Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Next.js",
            "Redux",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "SCSS/SASS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git & GitHub",
            "CI/CD Pipelines",
            "Firebase",
            "Jest & Testing Library",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-lg text-white text-sm font-semibold shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 w-50">
        <h3 className="text-3xl font-semibold text-white mb-4 text-center">
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Problem-Solving",
            "Critical Thinking",
            "Collaboration & Teamwork",
            "Adaptability",
            "Time Management",
            "Attention to Detail",
            "Effective Communication",
            "Agile & Scrum Methodologies",
            "Self-Learning",
            "Creativity",
            "Leadership",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-purple-600 rounded-lg text-white text-sm font-semibold shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
