import React from "react";
import "./Footer.css";
const style = {
  color: "#7f8fa4",
  fontSize: "8.9px",
  fontFamily: "'Open Sans', sans-serif",
};

const Footer = () => {
  return (
    <footer className="transparent-footer" style={{ ...style }}>
      <span>© Greytip Software Pvt. Ltd |</span>
      <a
        style={{ ...style }}
        href="https://zcon.greythr.com/v2/static-content/privacy-policy"
        target="_blank"
      >
        Privacy Policy
      </a>{" "}
      |
      <a
        style={{ ...style }}
        href="https://zcon.greythr.com/v2/static-content/terms-of-use"
        target="_blank"
      >
        Terms of Service
      </a>
    </footer>
  );
};

export default Footer;
