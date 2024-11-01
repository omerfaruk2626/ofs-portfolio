import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const getActivePageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/technologies":
        return "Technologies";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      default:
        return "";
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <span className="text-white ml-3">{getActivePageName()}</span>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  exact
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900 text-white"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/technologies"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900 text-white"
                  onClick={closeMenu}
                >
                  Technologies
                </NavLink>
                <NavLink
                  to="/projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900 text-white"
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900 text-white"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            exact
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/technologies"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
            onClick={closeMenu}
          >
            Technologies
          </NavLink>
          <NavLink
            to="/projects"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNavbar;
