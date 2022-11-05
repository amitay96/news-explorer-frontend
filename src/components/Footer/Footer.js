import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="footer__copyright">© 2022 Supersite, Powered by News API</p>
      <ul className="footer__links">
        <li className="footer__link">Home</li>
        <li className="footer__link">Practicum</li>
        <ul className="footer__links footer__social_links">
          <li className="footer__social_link footer__social_link-github"></li>
          <li className="footer__social_link footer__social_link-facebook"></li>
        </ul>
      </ul>
    </div>
  );
};

export default Footer;
