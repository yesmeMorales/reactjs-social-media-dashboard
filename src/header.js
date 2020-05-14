import React from "react";

import Switch from "./switch";

import "./header.css";

function Header({ setDarkMode, checked, setChecked }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers: 23,004</p>
          </div>
          <Switch
            setDarkMode={setDarkMode}
            checked={checked}
            setChecked={setChecked}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
