import { motion } from "framer-motion";

import banadersbul from "../assets/images/banadersbul.gif";
import caritakipsistemi from "../assets/images/etkincari.gif";

const projects = [
  {
    title: "BanaDersBul.com",
    description: "React + Redux + Next.js + Tailwind CSS + Material UI",
    image: banadersbul,
    link: "https://www.banadersbul.com",
  },
  {
    title: "Cari Takip Sistemi",
    description:
      "Fullstack MERN Project MongoDb + Express.js + React.js + Node.js",
    image: caritakipsistemi,
    link: "https://www.etkincari.com.tr",
  },
  {
    title: "Frontend Project",
    description: "Bootstrap + React.js + Pure CSS",
    image: "/project3.jpg",
    link: "https://dapper-nasturtium-644801.netlify.app/",
  },
];

const fadeInOutVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction === "left" ? 100 : -100,
    transition: { duration: 1 },
  }),
};

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white snap-start">
      <h2 className="text-4xl text-center mb-10">My Projects</h2>
      <div className="container mx-auto flex flex-col gap-8 items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? "left" : "right"}
            variants={fadeInOutVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg w-2/3 text-center"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-purple-400 hover:underline"
            >
              {project.link}
            </a>
            <img src={project.image} alt={project.title} className="mt-4" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
