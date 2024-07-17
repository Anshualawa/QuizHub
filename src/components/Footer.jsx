import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4 items-center">
          <li>
            <a
              href="https://www.instagram.com/i_am_alawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Anshualawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:alawa3282@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        <p title="alawa3282@gmail.com">
          &copy; 2024 Pappu Alawa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
