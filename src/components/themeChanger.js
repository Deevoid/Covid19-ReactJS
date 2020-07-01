import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import ReactTooltip from "react-tooltip";
import { useMediaQuery } from "react-responsive";

export default () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
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
            {!isTabletOrMobile && <ReactTooltip />}
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
};
