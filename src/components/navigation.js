import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <Link to="/blog">Blog</Link>
    <Link to="/symptoms">Symptoms</Link>
    <Link to="/safety">Safety</Link>
    <Link to="#helpline">Helpline</Link>
    <ThemeChanger />
  </nav>
);
