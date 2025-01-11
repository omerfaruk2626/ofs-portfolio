import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import TRFlag from "../assets/icons/trFlag.svg";
import ENFlag from "../assets/icons/enFlag.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  const menuVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 2.3, ease: "easeOut" },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gray-900 bg-opacity-90 z-50 flex justify-between items-center">
      <ul className="hidden md:flex space-x-6 text-white">
        {["home", "projects", "technologies", "about", "contact"].map(
          (item, index) => (
            <li key={index}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer"
              >
                {t(`navbar.${item}`)}
              </Link>
            </li>
          )
        )}
      </ul>

      <div className="hidden md:flex space-x-2">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`flex items-center justify-center transition duration-300 ${
            i18n.language === "en"
              ? "bg-blue-500 p-1 rounded-md text-white"
              : ""
          }`}
        >
          <img src={ENFlag} alt="English" className="w-6 h-4 rounded-sm" />
        </button>
        <button
          onClick={() => i18n.changeLanguage("tr")}
          className={`flex items-center justify-center transition duration-300 ${
            i18n.language === "tr"
              ? "bg-blue-500 p-1 rounded-md text-white"
              : ""
          }`}
        >
          <img src={TRFlag} alt="Türkçe" className="w-6 h-4 rounded-sm" />
        </button>
      </div>

      <div className="md:hidden flex items-center justify-between w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          <FiMenu />
        </button>

        <div className="flex space-x-2 ml-auto">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="flex items-center justify-center transition duration-300"
          >
            <img src={ENFlag} alt="English" className="w-6 h-4 rounded-sm" />
          </button>
          <button
            onClick={() => i18n.changeLanguage("tr")}
            className="flex items-center justify-center transition duration-300"
          >
            <img src={TRFlag} alt="Türkçe" className="w-6 h-4 rounded-sm" />
          </button>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />}

      <motion.div
        ref={menuRef}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed top-0 left-0 w-3/4 sm:w-1/2 rounded-r-lg bg-gray-900 bg-opacity-95 flex flex-col items-center justify-start transition-transform p-4 z-50"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-white text-3xl mb-6"
        >
          <FiX />
        </button>

        <ul className="flex flex-col space-y-6 text-white text-xl">
          {["home", "projects", "technologies", "about", "contact"].map(
            (item, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={menuVariants}
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  {t(`navbar.${item}`)}
                </Link>
              </motion.li>
            )
          )}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
