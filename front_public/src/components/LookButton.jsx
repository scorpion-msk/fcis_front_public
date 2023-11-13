import React, { useState } from "react";
import PropTypes from "prop-types";
import "../css/LookButton.css";

// reference link button component, avalable props:
// text="internal button text"
// link="https://......."
// color="#17228e" button colour
// arrow={true} boolean var to switch arrow on/off
// color_hover="#edefff" button colour when mouse is over

const LookButton = ({ text, link, color, arrow, color_hover }) => {
  const [hover, setHover] = useState("");
  return (
    <button
      className="look_button"
      style={{
        borderColor: color,
        backgroundColor: hover,
      }}
      onClick={() => {
        window.open(link, "_self");
      }}
      onMouseOver={() => {
        setHover(color_hover);
      }}
      onMouseLeave={() => {
        setHover("");
      }}
    >
      <span style={{ color: color, fontSize: "16px" }}>{text}</span>
      {arrow && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" />
        </svg>
      )}
    </button>
  );
};

LookButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  arrow: PropTypes.bool.isRequired,
  color_hover: PropTypes.string.isRequired,
};

export default LookButton;
