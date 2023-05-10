import { useState } from "react";
import "./NavbarStyles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import trueHandymanLogo from "./Truehandymanlogo.svg";
import { Link } from "react-scroll";

function Navbar({ onNavClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleItemClick = (page) => {
    onNavClick(page);
    setClicked(false);
  };

  const menuItems = [
    {
      title: "Home",
      url: "home",
      cName: "nav-links",
      icon: "fa-solid fa-house-user",
    },
    {
      title: "Projects",
      url: "projects",
      cName: "nav-links",
      icon: "fa-solid fa-tools",
    },
    {
      title: "Reviews",
      url: "reviews",
      cName: "nav-links",
      icon: "fa-solid fa-star",
    },
    {
      title: "Contact",
      url: "contact",
      cName: "nav-links",
      icon: "fa-solid fa-address-book",
    },
  ];

  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        TrueHandyMan{" "}
        <img src={trueHandymanLogo} alt="TrueHandyman Logo" className="icon" />
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              className={item.cName}
              smooth={true}
              duration={500}
              onClick={() => handleItemClick(item.url)}
            >
              <i className={`fas ${item.icon}`}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;