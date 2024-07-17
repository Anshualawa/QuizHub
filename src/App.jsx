import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/HomeSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full m-auto text-white p-2 bg-gray-950">
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />{" "}
      {/* Use the Navbar component */}
      <section className="h-screen pt-10 overflow-y-hidden overflow-y-scroll">
        {activeSection === "home" && <Home />}
        {activeSection === "contact" && <Contact />}
      </section>
      <Footer />
    </div>
  );
}

export default App;
