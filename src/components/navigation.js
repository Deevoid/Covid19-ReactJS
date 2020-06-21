import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <nav className="navigation">
    <Link to="/blog">Blog</Link>
    <Link to="/symptoms">Symptoms</Link>
    <Link to="/safety">Safety</Link>
    <Link to="/helpline">Helpline</Link>
  </nav>
);
