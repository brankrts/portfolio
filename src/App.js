import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skils from "./components/Skils";
import Contact from "./components/Contact";
import { createContext, useState } from "react";
import { tr } from "./localization/languages";

export const languageContext = createContext();

function App() {
  const [currentLang, setCurrentLang] = useState(tr);
  return (
    <languageContext.Provider value={{ currentLang, setCurrentLang }}>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skils />
      <Contact />
    </languageContext.Provider>
  );
}

export default App;
