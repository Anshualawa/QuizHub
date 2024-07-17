import React, { useState } from "react";

const Navbar = ({ activeSection, handleNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMobileNavClick = (section) => {
    handleNavClick(section);
    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span
                  className="font-semibold text-white text-lg"
                  title="Owner<Alawa>"
                >
                  QuizMastery
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`py-1 px-2 ${activeSection === "home" ? "text-blue-500 border-b-4 border-blue-500" : "text-white border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500"}`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>

            <button
              className={`py-1 px-2 ${activeSection === "contact" ? "text-blue-500 border-b-4 border-blue-500" : "text-white border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500"}`}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${menuOpen ? "block" : "hidden"} mobile-menu md:hidden`}>
        <ul className="">
          <li>
            <button
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 transition duration-300 w-full text-left"
              onClick={() => handleMobileNavClick("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 transition duration-300 w-full text-left"
              onClick={() => handleMobileNavClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
