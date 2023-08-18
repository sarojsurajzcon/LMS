import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="transparent-footer">
      <span>© Greytip Software Pvt. Ltd |</span>
      <a
        href="https://zcon.greythr.com/v2/static-content/privacy-policy"
        target="_blank"
      >
        Privacy Policy
      </a>{" "}
      <a
        href="https://zcon.greythr.com/v2/static-content/terms-of-use"
        target="_blank"
      >
        | Terms of Service
      </a>
    </footer>
  );
};

export default Footer;
