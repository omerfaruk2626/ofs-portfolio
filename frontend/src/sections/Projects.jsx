import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";

import banadersbul from "../assets/images/banadersbul.png";
import etkincari from "../assets/images/etkincari.png";
import code_fighters from "../assets/images/code_fighters.png";
import kadikuyusu from "../assets/images/kadikuyusu.png";
import Swal from "sweetalert2";

const images = {
  "BanaDersBul.com": banadersbul,
  "Cari Tracking System": etkincari,
  "Cari Takip Sistemi": etkincari,
  "Kadıkuyusu Köyü": kadikuyusu,
  "Kadıkuyusu Village": kadikuyusu,
  "Code Fighters": code_fighters,
};

const technologies = {
  "BanaDersBul.com": [
    "React",
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
  ],
  "Cari Tracking System": ["MongoDB", "Express.js", "React.js", "Node.js"],
  "Cari Takip Sistemi": ["MongoDB", "Express.js", "React.js", "Node.js"],
  "Kadıkuyusu Köyü": [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Pure CSS",
    "Material UI",
  ],
  "Kadıkuyusu Village": [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Pure CSS",
    "Material UI",
  ],
  "Code Fighters": ["Bootstrap", "React.js", "Pure CSS"],
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const translatedProjects = t("projects.list", { returnObjects: true }).map(
      (project) => ({
        ...project,
        image: images[project.name] || images[project.originalName],
        techs:
          technologies[project.name] ||
          technologies[project.originalName] ||
          [],
      })
    );
    setProjects(translatedProjects);
  }, [i18n.language, t]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleVisitProject = (url) => {
    Swal.fire({
      title: "Yönlendirme Onayı",
      text: `Bu adrese yönlendiriliyorsunuz: ${url}\nOnaylıyor musunuz?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white snap-start py-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-purple-400 text-center mb-12 px-4">
        {t("projects.title")}
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-800 p-8 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-70 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-purple-400 mt-4 text-center">
              {project.name}
            </h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg text-center max-w-2xl w-full 
             lg:max-w-5xl xl:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full max-h-[30vh] object-contain rounded-lg shadow-xl"
            />
            <h3 className="text-3xl font-bold text-purple-400 mt-4">
              {selectedProject.name}
            </h3>
            <p>{selectedProject.link}</p>
            <div className="mt-4">
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {selectedProject.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600 text-white rounded-lg md:text-sm text-xs shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 md:max-h-[40vh] max-h-[30vh] overflow-y-auto">
              <p className="md:text-lg text-xs text-gray-300 mt-4 px-4">
                {selectedProject.description}
              </p>
            </div>
            <button
              onClick={() => handleVisitProject(selectedProject.link)}
              className="mt-4 inline-block md:px-6 md:py-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-lg font-semibold transition"
            >
              Visit Project
            </button>

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 bg-gray-900 text-white text-3xl rounded-full p-2"
            >
              <FiX />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
