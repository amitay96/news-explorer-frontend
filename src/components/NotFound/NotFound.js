import React from "react";
import notFoundIcon from "../../images/icons/not-found_icon.svg";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__container section">
        <img
          src={notFoundIcon}
          className="not-found__pic"
          alt="Authors profile"
        />
        <p className="not-found__title">Nothing found</p>
        <p className="not-found__text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
