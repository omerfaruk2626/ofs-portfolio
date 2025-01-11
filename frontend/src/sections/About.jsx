import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen w-full  flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <Helmet>
        <title>Ömer Faruk Sivri - Web Developer Portfolio</title>

        <meta
          name="description"
          content="Ömer Faruk Sivri'nin kişisel web sitesi. İlgi alanları, projeleri ve iletişim bilgileri hakkında daha fazla bilgi edinin."
        />

        <link rel="canonical" href="https://omerfaruksivri.com.tr" />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ömer Faruk Sivri - Web Developer" />
        <meta
          property="og:description"
          content="Ömer Faruk Sivri'nin kişisel web sitesi. İlgi alanları, projeleri ve iletişim bilgileri hakkında daha fazla bilgi edinin."
        />
        <meta property="og:url" content="https://omerfaruksivri.com.tr" />
        <meta
          property="og:image"
          content="https://omerfaruksivri.com.tr/assets/preview.jpg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ömer Faruk Sivri - Web Developer" />
        <meta
          name="twitter:description"
          content="Ömer Faruk Sivri'nin kişisel web sitesi. İlgi alanları, projeleri ve iletişim bilgileri hakkında daha fazla bilgi edinin."
        />
        <meta
          name="twitter:image"
          content="https://omerfaruksivri.com.tr/assets/preview.jpg"
        />
      </Helmet>

      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg">
        Hi, I'm Ömer Faruk Sivri. I'm a passionate web developer building modern
        web applications with React, Redux, and TailwindCSS.
      </p>
    </section>
  );
};

export default About;
