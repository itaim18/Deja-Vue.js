import React from "react";
import { motion } from "framer-motion";
const AppComp = ({ data }) => {
  const { imgSrc, name, desc, links } = data;
  return (
    <motion.div className="app-comp">
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <div>
        {links.map((link) => {
          const { site, name } = link;
          return (
            <button className="siteBtn" key={name}>
              <a key={name} href={site}>
                {name}
              </a>
            </button>
          );
        })}
        <div className="box"></div>
      </div>
    </motion.div>
  );
};

export default AppComp;
