import { useState } from "react";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Quote from "./components/Quote";
import Features from "./components/Features";
import About from "./components/About";
import DownloadLink from "./components/DownloadLink";
import Rights from "./components/Rights";
import Apps from "./components/Apps/Apps";
function App() {
  const [isDark, setIsDark] = useState(false);
  const flipMode = () => {
    setIsDark((prevState) => !prevState);
  };
  return (
    <>
      <Navbar isDark={isDark} onChangeMode={flipMode} />
      <Info isDark={isDark} />
      <Quote isDark={isDark} />
      <Features isDark={isDark} />
      <About isDark={isDark} />
      <DownloadLink />
      <Apps isDark={isDark} />
      <Rights isDark={isDark} />
    </>
  );
}

export default App;
