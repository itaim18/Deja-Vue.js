import React from "react";
import extensionImg from "../assets/images/extension-dejavue.jpeg";
const About = ({ isDark }) => {
  return (
    <div id="about" className={`about ${isDark ? "dark-mode-about" : null}`}>
      <h2>
        Aren't you tired of building your web app in a functional and simplified
        way?
      </h2>
      <div className="about-desc">
        <p style={{ fontSize: "20px" }}>
          In deja vue js you'll just do a <span>short 300 questions quiz</span>{" "}
          which may dig deep in your personality and past and may or may not
          wake you traumatized parts of your brain.
        </p>

        <img className="extensionImg" src={extensionImg} alt="product" />
      </div>
    </div>
  );
};

export default About;
