import React from "react";
import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Defines the state "darkMode" to manage dark mode, initializing from localStorage or defaulting to false incase of errors.

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });
  // Applying appropriate class to the body based on the darkMode state.
  if (darkMode) {
    // Removes light mode class if dark mode is enabled.
    document.body.classList.remove("light-mode");
  } else {
    // Adds light mode class if dark mode is disabled.
    document.body.classList.add("light-mode");
  }

  const icon = darkMode ? <BsSunFill /> : <BsMoonFill />;
  return (
    <nav className="d-flex justify-content-between align-items-center p-5 shadow bg-elements custom-text-color">
      <Link to="/" className="text-decoration-none custom-text-color">
        <h3 className="mb-0">Where in the world?</h3>
      </Link>

      <div
        onClick={() => {
          // Toggles the light-mode class in the CSS on the body.
          document.body.classList.toggle("light-mode");

          // Updates the darkMode state with the opposite of what was previously in the dark mode(light mode).
          setDarkMode(!darkMode);

          // Updates the localStorage with the current mode either light or dark.
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center gap-2"
      >
        {icon}
        <p className="mb-0">{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </nav>
  );
};

export default NavBar;
