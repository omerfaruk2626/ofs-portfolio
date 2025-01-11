import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-r from-orange-900 via-indigo-800 to-purple-700 text-white snap-start"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold"
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg"
      >
        Hi, I’m<h1>Ömer Faruk Sivri.</h1> I build modern web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <p className="text-lg">Scroll down to more information</p>
        <div className="mt-4 animate-bounce">
          <span className="text-3xl">⬇️</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
