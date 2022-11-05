import React from "react";
import "./NewsnewsCard.css";

const NewsCard = (props) => {
    return (
        <li className="newsCard">
            <button
                className="newsCard__save_button"
                type="button"
                onClick={handleDeleteNewsCard}
            />
            <img
                className="newsCard__image"
                src={props.newsCard.link}
                alt={props.newsCard.name}
                onClick={handleClick}
            />
            <div className="newsCard__text-area">
                <p className="newsCard__date">{props.newsCard.date}</p>
                <h3 className="newsCard__title">{props.newsCard.name}</h3>
                <p className="newsCard__text">{props.newsCard.text}</p>
                <p className="newsCard__source">{props.newsCard.source}</p>
            </div>
        </li>
    );
};


export default NewsCard;
