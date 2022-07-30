import React, { useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <>
      {/* <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      >
        click me
      </button> */}
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "#424200" }}>☀︎</span>

        <div className="switch-checkbox">
          <label className="switch" onChange={() => setDarkMode(!darkMode)}>
            <input
              type="checkbox"
              onClick={(e) => switchTheme(e)}
              id="darkMode"
              className={theme === "dark" ? clickedClass : ""}
            />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
    </>
  );
};

export default DarkMode;
