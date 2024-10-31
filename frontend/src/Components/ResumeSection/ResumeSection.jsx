import React, { useState, useEffect, useRef } from "react";

function ResumeSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
    <div className="flex gap-2 items-center justify-center">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="btn btn-outline-light mt-3 animate-slide-in-left"
        >
          Check My Resume
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2">
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
    </div>
  );
}

export default ResumeSection;
