import React from "react";

import iconFacebook from "./images/icon-facebook.svg";
import iconUp from "./images/icon-up.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconYoutube from "./images/icon-youtube.svg";

import Card from "./card";
import "./top-cards.css";

const cardListData = [
  {
    userName: "@Chesmin",
    iconSocialNetwork: iconFacebook,
    iconUp: iconUp,
    followers: 30,
    todayFollowers: 10,
    name: "facebook",
  },
  {
    userName: "@Yesme",
    iconSocialNetwork: iconTwitter,
    iconUp: iconUp,
    followers: 28,
    todayFollowers: 12,
    name: "twitter",
  },
  {
    userName: "@Chesmin",
    iconSocialNetwork: iconInstagram,
    iconUp: iconUp,
    followers: 10,
    todayFollowers: 12,
    name: "instagram",
  },
  {
    userName: "@Chesmin",
    iconSocialNetwork: iconYoutube,
    iconUp: iconUp,
    followers: 5,
    todayFollowers: -50,
    name: "youtube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData, index) => (
            <Card key={index} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TopCardList;
