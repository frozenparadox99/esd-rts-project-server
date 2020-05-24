import React from "react";

import MenuItem from "../menu-item/MenuItem";

import "./directory.styles.scss";

let sections = {
  sections: [
    {
      title: "humidity",
      imageUrl: "https://i.imgur.com/2uFCPou.jpg",
      id: 1,
      linkUrl: "/",
      value: 0,
    },
    {
      title: "buzzer",
      imageUrl: "https://i.imgur.com/wYO9Nim.jpg",
      id: 2,
      linkUrl: "/",
      value: 0,
    },
    {
      title: "temp",
      imageUrl: "https://i.imgur.com/q2wanwX.jpg",
      id: 3,
      linkUrl: "/",
      value: 0,
    },
    {
      title: "Motor",
      imageUrl: "https://i.imgur.com/CGb3w01.jpg",
      size: "large",
      id: 4,
      linkUrl: "/",
      value: 0,
    },
    {
      title: "LED",
      imageUrl: "https://i.imgur.com/07d6jg9.jpg",
      size: "large",
      id: 5,
      linkUrl: "/",
      value: 0,
    },
  ],
};

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
