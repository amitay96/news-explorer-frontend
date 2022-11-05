import React from "react";
import card from "../../images/card-image.png";
import "./NewsCard.css";

const NewsCard = (props) => {
    return (
        <li className="newsCard">
            <button
                className="newsCard__save_button"
                type="button"
            />
            <img
                className="newsCard__image"
                src={card}
                // alt={props.newsCard.name}
            />
            <div className="newsCard__text-area">
                <p className="newsCard__date">November 4, 2020</p>
                <p className="newsCard__title">Everyone Needs a Special 'Sit Spot' in Nature</p>
                <p className="newsCard__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
                <p className="newsCard__source">treehugger</p>
            </div>
        </li>
    );
};


export default NewsCard;
