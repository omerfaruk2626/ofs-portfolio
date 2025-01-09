import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-700 text-white snap-start">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-xl"
      >
        Hi, I’m Omer Faruk Sivri. I build modern web applications.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <p className="text-lg">Scroll down to see my work</p>
        <div className="mt-4 animate-bounce">
          <span className="text-3xl">⬇️</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
