import React, { useState, useEffect } from "react";
import "../css/ScrollButton.css";

const ScrollButton = () => {
  // new scroll event listener + event removal when App is unmounted to prevent memory leak
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // state and fuction hading scroll event on main page
  const [scrollEvent, setScrollEvent] = useState(false);
  const handleScroll = () => {
    return window.scrollY === 0 ? setScrollEvent(false) : setScrollEvent(true);
  };

  return (
    <div
      className={scrollEvent ? "scroll_button_active" : "scroll_button_passive"}
    >
      <svg
        viewBox="0 0 24 24"
        onClick={() => {
          return window.scrollY > 0 ? window.scrollTo(0, 0) : null;
        }}
      >
        <path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z" />
      </svg>
    </div>
  );
};

export default ScrollButton;
