import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Statscards from "./Components/Stats-Cards/Statscards";
import Overviewstatscards from "./Components/Overview-Stats-Cards/Overviewstatscards";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  }

  return (
    <div
      className={`${
        darkMode && "dark"
      } relative h-auto md:h-auto lg:h-dvh xl:h-dvh 3xl:h-dvh bg-veryPaleBlueTopBG dark:bg-veryDarkBlueTopBG px-4 md:px-20 pt-5`}
    >
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Statscards />
      <Overviewstatscards />
    </div>
  );
}

export default App;

