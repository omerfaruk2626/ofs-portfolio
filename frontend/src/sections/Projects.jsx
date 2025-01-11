import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";

import banadersbul from "../assets/images/banadersbul.gif";
import etkincari from "../assets/images/etkincari.gif";
import code_fighters from "../assets/images/code_fighters.gif";

const images = {
  "BanaDersBul.com": banadersbul,
  "Cari Tracking System": etkincari,
  "Cari Takip Sistemi": etkincari,
  "Frontend Project": code_fighters,
  "Frontend Projesi": code_fighters,
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Modal için state

  useEffect(() => {
    const translatedProjects = t("projects.list", { returnObjects: true }).map(
      (project) => ({
        ...project,
        image: images[project.name] || images[project.originalName] || null,
      })
    );
    setProjects(translatedProjects);
  }, [i18n.language, t]);

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white snap-start py-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-purple-400 text-center mb-12">
        {t("projects.title")}
      </h2>

      <div className="container mx-auto flex flex-col gap-10 items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gray-800 p-8 rounded-lg sm:w-3/4 w-full text-center shadow-lg relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
            <p className="text-lg text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm break-words font-semibold text-purple-400 hover:underline mt-2 inline-block"
            >
              {project.link}
            </a>
            <div className="mt-6 w-full flex justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-full max-h-64 sm:max-h-80 rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
                  onClick={() => setSelectedImage(project.image)}
                />
              ) : (
                <div className="bg-gray-700 animate-pulse h-[100px] w-full flex items-center justify-center">
                  <span className="text-white">Loading...</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)} // ✅ Dışarı tıklanınca kapat
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={selectedImage}
              alt="Project"
              className="max-w-full max-h-[80vh] rounded-lg shadow-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
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
