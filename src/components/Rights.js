import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Rights = ({ isDark }) => {
  return (
    <div className={`rights ${isDark ? "dark-mode-rights" : null}`}>
      <h4>
        <AiOutlineCopyrightCircle /> All rights are reserved to Itai Mizlish
      </h4>
      <ul className="sub-links">
        <li>
          <a href="/">Privacy </a>
        </li>
        {"-"}
        <li>
          <a href="/"> terms</a>
        </li>
        {"-"}
        <li>
          <a href="/"> FAQ</a>
        </li>
      </ul>
    </div>
  );
};

export default Rights;
