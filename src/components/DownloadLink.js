import React from "react";

const DownloadLink = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
        reveals[i].classList.remove("fade-away");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div id="download-link" className="download-link">
      <div className="container reveal fade-left">
        <h1>start now.</h1>
        <button className="btn download-btn">download now</button>
      </div>
    </div>
  );
};

export default DownloadLink;
