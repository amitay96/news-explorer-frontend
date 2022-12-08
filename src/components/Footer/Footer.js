import React from "react";
import { Link } from "react-router-dom";
import ghIcon from "../../images/icons/github_icon.svg";
import fbIcon from "../../images/icons/fb_icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links_container">
        <ul className="footer__links">
          <li className="footer__link">
            <Link className="footer__link" to="/">
              Home
            </Link>
          </li>
          <li className="footer__link">
            <a
              href="https://practicum.yandex.com/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Practicum
            </a>
          </li>
        </ul>
        <ul className="footer__links footer__links_social">
          <li className="footer__link_social">
            <a
              href="https://github.com/amitay96/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ghIcon}
                className="footer__link_social"
                alt="github link"
              />
            </a>
          </li>
          <li className="footer__link_social">
            <a
              href="https://www.facebook.com/Amitay96/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fbIcon}
                className="footer__link_social"
                alt="facebook link"
              />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">© 2022 Supersite, Powered by News API</p>
    </footer>
  );
};

export default Footer;
