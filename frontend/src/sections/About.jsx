import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6"
    >
      <Helmet>
        <title>Ömer Faruk Sivri - Web Developer</title>
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

      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 text-purple-400">About Me</h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm{" "}
          <span className="text-white font-semibold">Ömer Faruk Sivri</span>, a{" "}
          <span className="text-purple-400 font-bold">Frontend Developer</span>{" "}
          who loves crafting dynamic, responsive, and efficient web
          applications. With a strong foundation in{" "}
          <span className="text-white font-semibold">
            React, Redux, Next.js, and Tailwind CSS
          </span>
          , I focus on building seamless user experiences.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Currently, I work as a{" "}
          <span className="text-white font-semibold">
            Jr. Frontend Developer
          </span>{" "}
          at{" "}
          <a
            href="https://banadersbul.com"
            className="text-purple-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            BanaDersBul.com
          </a>
          , where I develop user interfaces that are **visually appealing** and
          **highly functional**. My role includes enhancing **state management**
          with Redux, integrating **RESTful APIs**, and optimizing performance
          for smooth user interactions.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          What excites me the most is the ability to bring creative ideas to
          life through **clean, scalable, and maintainable code**. I stay
          up-to-date with the latest web technologies and best practices to
          ensure that I build modern, accessible, and performant applications.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Beyond coding, I am deeply passionate about **continuous learning**,
          teamwork, and solving complex problems. I enjoy collaborating with
          designers, backend developers, and project managers to deliver
          high-quality web applications. My ultimate goal is to create digital
          solutions that **improve user experience and efficiency**.
        </p>

        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold shadow-md"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
