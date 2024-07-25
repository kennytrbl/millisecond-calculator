import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        Photo by{" "}
        <a
          href="https://unsplash.com/@yokeboy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          target="_blank"
          rel="noopener noreferrer"
        >
          Y K
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/empty-street-between-houses--e6Xu27_T50?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </div>
      <div className="footer-right">
        a creation by{" "}
        <a
          className="footer-link"
          href="https://github.com/kennytrbl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kenny Zhang
        </a>
        , © {currentYear}
      </div>
    </footer>
  );
}

export default Footer;
