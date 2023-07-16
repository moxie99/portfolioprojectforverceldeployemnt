import React, { useState } from "react";
import { images } from "../../constants";
import { HiMenuAlt3, HiXCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="my logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Projects", "Skills", "Contact", "Testimonials"].map(
          (item) => {
            return (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          }
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <HiXCircle onClick={() => setToggle(false)} />
            <ul>
              {[
                "Home",
                "About",
                "Projects",
                "Skills",
                "Contact",
                "Testimonials",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
