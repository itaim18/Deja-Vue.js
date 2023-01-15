import React from "react";
import computer from "../assets/images/info-img.png";
const Info = ({ isDark }) => {
  return (
    <article id="intro" className={`info ${isDark ? "dark-mode-info" : null}`}>
      <div className="headline">
        <div>
          <h1>Try Deja Vue.js;</h1>
          <p>{`<🧠>coding like you've done it already</🧠>`}</p>
        </div>
        <img className="computer-img" src={computer} alt="computer" />
      </div>
    </article>
  );
};

export default Info;
