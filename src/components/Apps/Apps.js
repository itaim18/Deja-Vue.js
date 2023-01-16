import { useRef, useEffect, useState } from "react";
import AppComp from "./AppComp";
import apps from "../../data";
import { motion } from "framer-motion";
const Apps = ({ isDark }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth / 1.1 - carousel.current.offsetWidth);
  }, []);
  console.log(width);
  return (
    <div id="apps" className={`${isDark ? "dark-mode-apps" : null}`}>
      <h2 className="apps-head">Who's using Deja Vue.js?</h2>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="apps"
        >
          {apps.map((app) => (
            <AppComp key={app.aId} data={app} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Apps;
