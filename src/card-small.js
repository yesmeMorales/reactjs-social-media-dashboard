import React from "react";

import "./card-small.css";

import iconDown from "./images/icon-down.svg";

function CardSmall({ iconSocialNetwork, icon, pagesViews, growth }) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={iconSocialNetwork} alt="" />
      </p>
      <p className="card-small-number">{pagesViews}</p>
      <p
        className={`${
          growth < 0
            ? "card-small-percentage is-danger"
            : "card-small-percentage"
        }`}
      >
        <span>
          {growth < 0 && <img src={iconDown} alt="" />}
          {growth > 0 && <img src={icon} alt="" />}
          {growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
