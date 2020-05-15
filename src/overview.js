import React from "react";

import iconFacebook from "./images/icon-facebook.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconYoutube from "./images/icon-youtube.svg";
import icon from "./images/icon-up.svg";

import CardSmall from "./card-small";

import "./overview.css";

const cardSmallList = [
  {
    iconSocialNetwork: iconFacebook,
    icon: icon,
    pagesViews: 87,
    growth: 3,
  },
  {
    iconSocialNetwork: iconFacebook,
    icon: icon,
    pagesViews: 52,
    growth: -2,
  },
  {
    iconSocialNetwork: iconInstagram,
    icon: icon,
    pagesViews: 5462,
    growth: 2257,
  },
  {
    iconSocialNetwork: iconInstagram,
    icon: icon,
    pagesViews: 117,
    growth: 303,
  },
  {
    iconSocialNetwork: iconTwitter,
    icon: icon,
    pagesViews: 507,
    growth: 562,
  },
  {
    iconSocialNetwork: iconTwitter,
    icon: icon,
    pagesViews: 107,
    growth: 10,
  },
  {
    iconSocialNetwork: iconYoutube,
    icon: icon,
    pagesViews: 107,
    growth: 19,
  },
  {
    iconSocialNetwork: iconYoutube,
    icon: icon,
    pagesViews: 1407,
    growth: 12,
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map((cardSmall, index) => (
            <CardSmall key={index} {...cardSmall} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
