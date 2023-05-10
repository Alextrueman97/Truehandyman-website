import "./style.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  let pageContent;
  switch (currentPage) {
    case "home":
      pageContent = <HomePage />;
      break;
    case "projects":
      pageContent = <Projects />;
      break;
    case "reviews":
      pageContent = <Reviews />;
      break;
    case "contact":
      pageContent = <Contact />;
      break;
    default:
      pageContent = <HomePage />;
  }

  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;