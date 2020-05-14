import React from "react";

import "./card.css";

function Card({
  userName,
  iconSocialNetwork,
  iconUp,
  todayFollowers,
  name,
  followers,
}) {
  return (
    <article className={`card ${name}`}>
      <p className="card-title">
        <img src={iconSocialNetwork} alt=""></img>
        {userName}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src={iconUp} alt="up" />
        {todayFollowers} today
      </p>
    </article>
  );
}

export default Card;
