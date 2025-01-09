import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <Helmet>
        <title>About - Ömer Faruk Sivri</title>
        <meta
          name="description"
          content="Ömer Faruk Sivri, modern web uygulamaları geliştiren bir yazılım geliştiricidir."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ömer Faruk Sivri",
            jobTitle: "Web Developer",
            url: "https://omerfaruksivri.com.tr",
            sameAs: [
              "https://github.com/omerfaruk2626",
              "https://linkedin.com/in/o-faruk-sivri",
            ],
          })}
        </script>
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
