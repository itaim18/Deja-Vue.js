import { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { FiBook, FiBookOpen, FiDownload } from "react-icons/fi";
import { HiSun } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import { TfiGithub } from "react-icons/tfi";
import logo from "../assets/images/dejavue-logo.png";
const Navbar = ({ isDark, onChangeMode }) => {
  const nodeRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  const scroll = (e) => {
    e.preventDefault();
    var ref = "";
    if (e.target.parentNode.hash) {
      ref = e.target.parentNode.hash;
    } else {
      ref = e.target.hash;
    }
    const idx = ref.indexOf("#");
    const el = document.getElementById(ref.slice(idx + 1));

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav id="navbar" className={`navbar ${isDark ? "dark-mode" : null}`}>
        <div className="navbar-center">
          <div className="nav-header">
            <a href="#intro" onClick={scroll}>
              <img src={logo} alt="logo" className="logo" />
            </a>
            <div className="nav-buttons">
              <button
                onClick={onChangeMode}
                style={{ border: "none" }}
                className="btn toggle-btn mode-btn"
              >
                <Transition nodeRef={nodeRef} in={isOpen} timeout={5000}>
                  {isDark ? (
                    <HiSun
                      style={{
                        color: "#f7b301",
                      }}
                    />
                  ) : (
                    <BsFillMoonFill
                      style={{
                        color: "#f7f7f7",
                        fontSize: "0.8em",
                        position: "relative",
                        bottom: "0.1em",
                      }}
                    />
                  )}
                </Transition>
              </button>
              <button
                onClick={toggleButton}
                style={{ border: "none" }}
                className="btn toggle-btn"
              >
                <Transition nodeRef={nodeRef} in={isOpen} timeout={5000}>
                  {isOpen ? <FiBookOpen /> : <FiBook />}
                </Transition>
              </button>
            </div>
          </div>
        </div>
        <ul
          className="navbar-links nav-buttons"
          style={{ marginRight: "20px" }}
        >
          <li>
            <a className="link-btn" href="#features" onClick={scroll}>
              Features
            </a>
          </li>
          <li>
            <a className="link-btn" onClick={scroll} href="#apps">
              Learn
            </a>
          </li>

          <li>
            <a className="link-btn" onClick={scroll} href="#about">
              About
            </a>
          </li>
          <li>
            <button
              onClick={onChangeMode}
              style={{ border: "none" }}
              className="btn comp-toggle-btn mode-btn "
            >
              <Transition nodeRef={nodeRef} in={isOpen} timeout={5000}>
                {isDark ? (
                  <HiSun
                    style={{
                      color: "#f7b301",
                      fontSize: "0.8em",
                      position: "relative",
                      bottom: "0.5em",
                    }}
                  />
                ) : (
                  <BsFillMoonFill
                    style={{
                      color: "#f7f7f7",
                      fontSize: "0.7em",
                      position: "relative",
                      bottom: "0.65em",
                    }}
                  />
                )}
              </Transition>
            </button>
          </li>
          <li>
            <a className="link-btn github" action="#contact" href="#contact">
              <TfiGithub />
            </a>
          </li>
          <li>
            <a
              onClick={scroll}
              className="btn download-btn"
              href="#download-link"
            >
              <FiDownload /> download
            </a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <section className="submenu">
          <ul className="subMenu-links">
            <li>
              <a className="link-btn" onClick={scroll} href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="link-btn" onClick={scroll} href="#apps">
                Learn
              </a>
            </li>

            <li>
              <a className="link-btn" onClick={scroll} href="#about">
                About
              </a>
            </li>

            <li>
              <a
                className="btn download-btn"
                onClick={scroll}
                href="#download-link"
              >
                <FiDownload /> download
              </a>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Navbar;
