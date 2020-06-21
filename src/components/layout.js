import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
// import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container site-container">
          <div className="site-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 286 96"
              fill="none"
            >
              <path
                d="M0 0H286L274.292 56.1977C270.32 75.2616 268.335 84.7936 261.444 90.3968C254.553 96 244.816 96 225.343 96H60.6569C41.1836 96 31.447 96 24.5562 90.3968C17.6653 84.7936 15.6795 75.2616 11.7079 56.1977L0 0Z"
                fill="#6F00FF"
              />
            </svg>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation />
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} &bull; Crafted with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          and safety
        </p>
      </footer>
    </div>
  );
};
