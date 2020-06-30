import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import ReactTooltip from "react-tooltip";

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />{" "}
        <div className="mode-container">
          <ReactTooltip />
          <i
            className="gg-sun"
            data-tip="Turn on the lights"
            data-place="bottom"
            data-effect="solid"
          ></i>
          <i
            className="gg-moon"
            data-tip="If your eyes hurts"
            data-place="bottom"
            data-effect="solid"
          ></i>
        </div>
      </label>
    )}
  </ThemeToggler>
);
