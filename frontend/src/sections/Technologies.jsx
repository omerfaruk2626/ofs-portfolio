import React from "react";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section
      id="technologies"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white snap-start px-4 sm:px-6 lg:px-12"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-400 text-center">
        {t("technologies.title")}
      </h2>

      <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl">
        {t("technologies.description")}
      </p>
      <div className="mt-8 w-full max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
          {t("technologies.technicalSkillsTitle")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
          {t("technologies.technicalSkills", { returnObjects: true }).map(
            (tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-lg text-white text-xs sm:text-sm md:text-base font-semibold shadow-md text-center"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
          {t("technologies.softSkillsTitle")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
          {t("technologies.softSkills", { returnObjects: true }).map(
            (skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-600 rounded-lg text-white text-xs sm:text-sm md:text-base font-semibold shadow-md text-center"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
