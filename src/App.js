import React, { useState, useEffect } from "react";
import "./globals.css";

import Header from "./header";
import TopCardList from "./top-card-list";
import Overview from "./overview";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }, []);
  // le pasamos ref cuando queremos ejecutar useEffect  cuando cambie el estado de ref
  // si ref cambia ejecutamos lo que está en el hook

  return (
    <main
      className={`${darkMode === true ? "is-dark-mode" : "is-light-mode"} `}
    >
      <Header
        setDarkMode={setDarkMode}
        checked={checked}
        setChecked={setChecked}
      />
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
