import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2022 Supersite, Powered by News API</p>
      <div className="footer__links_container">
        <ul className="footer__links">
          <li className="footer__link">
            <Link className="footer__link" to="/">
              Home
            </Link>
          </li>
          <li className="footer__link">
            <Link className="footer__link" to="https://practicum.com/">
              Practicum
            </Link>
          </li>
        </ul>
        <ul className="footer__links footer__social_links">
          <li className="footer__social_link footer__social_link-github"></li>
          <li className="footer__social_link footer__social_link-facebook"></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
