import "./Footer.css";

const Footer = () => {
  return (
    <footer className="transparent-footer">
      <span>© Greytip Software Pvt. Ltd |</span>
      <a
        href="https://zcon.greythr.com/v2/static-content/privacy-policy"
        target="_blank" rel="noreferrer"
      >
        Privacy Policy
      </a>{" "}
      <a
        href="https://zcon.greythr.com/v2/static-content/terms-of-use"
        target="_blank" rel="noreferrer"
      >
        | Terms of Service
      </a>
    </footer>
  );
};

export default Footer;
