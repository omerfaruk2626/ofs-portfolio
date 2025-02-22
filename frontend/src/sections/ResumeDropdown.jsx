import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ResumeDropdown = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full text-center" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold shadow-md transition w-full"
      >
        {t("about.resumeButton")}
      </button>
      {isDropdownOpen && (
        <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-full z-10">
          <a
            href="/Resume_TR.pdf"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsDropdownOpen(false)}
          >
            TR
          </a>
          <a
            href="/Resume_ENG.pdf"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsDropdownOpen(false)}
          >
            ENG
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumeDropdown;
