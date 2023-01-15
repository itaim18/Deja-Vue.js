import React from "react";
import { GiPirateSkull } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { HiHandThumbUp } from "react-icons/hi2";
import { BsTools } from "react-icons/bs";
import Iframe from "react-iframe";
import vid from "../assets/videos/video.mp4";
const Features = ({ isDark }) => {
  return (
    <div className={`features ${isDark ? "dark-mode-features" : null}`}>
      <div>
        <div className="x"></div>
        <div className="x brackets"></div>
        <div id="talkbubble"></div>
        <Iframe url={vid} className="video" loop autoplay muted="muted" />
      </div>
      <ul className="feature-items">
        <li>
          <div>
            <HiHandThumbUp className="feature_icon" />
            <h3>easy to use</h3>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
          </div>
        </li>
        <li>
          <div>
            <FaPeopleCarry className="feature_icon" />{" "}
            <h3>personal connection</h3>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
          </div>
        </li>
        <li>
          <div>
            <GiPirateSkull className="feature_icon" />
            <h3>exciting</h3>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
          </div>
        </li>
        <li>
          <div>
            <BsTools className="feature_icon" />
            <h3>quick setup</h3>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Features;
