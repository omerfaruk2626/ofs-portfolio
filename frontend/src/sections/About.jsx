import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6"
    >
      <Helmet>
        <title>{t("about.metaTitle")}</title>
        <meta name="description" content={t("about.metaDescription")} />

        <link rel="canonical" href="https://omerfaruksivri.com.tr" />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={t("about.metaTitle")} />
        <meta property="og:description" content={t("about.metaDescription")} />
        <meta property="og:url" content="https://omerfaruksivri.com.tr" />
        <meta
          property="og:image"
          content="https://omerfaruksivri.com.tr/assets/preview.jpg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("about.metaTitle")} />
        <meta name="twitter:description" content={t("about.metaDescription")} />
        <meta
          name="twitter:image"
          content="https://omerfaruksivri.com.tr/assets/preview.jpg"
        />
      </Helmet>

      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 text-purple-400">
          {t("about.title")}
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          {t("about.intro")}
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          {t("about.currentJob")}
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          {t("about.passion")}
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          {t("about.learning")}
        </p>

        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold shadow-md"
          >
            {t("about.resumeButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
