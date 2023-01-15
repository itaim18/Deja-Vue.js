import React from "react";
import hypnosis from "../assets/images/hypnosis-logo.png";
const Quote = ({ isDark }) => {
  const animateBubble = (x) => {
    var wrapper = document.getElementById("bubble-wrapper");
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);
    setTimeout(() => {
      wrapper.removeChild(bubble);
    }, 1500);
  };

  window.onmousemove = (e) => animateBubble(e.clientX);
  return (
    <div className={`quote ${isDark ? "dark-mode-quote" : null}  `}>
      <section className="section">
        <h2>"Start Living your past in the future!"</h2>
        <img
          id="features"
          className="company-img"
          src={hypnosis}
          alt="hypnosis"
        />
        <div id="bubble-wrapper"></div>
      </section>
    </div>
  );
};

export default Quote;
