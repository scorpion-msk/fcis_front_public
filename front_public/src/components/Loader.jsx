import React from "react";
import PropTypes from "prop-types";
import "../css/Loader.css";

// {loader_size} - int value for loader W x H (without px)
// auto scaling is supported, width scales according to size

const Loader = ({ loader_size }) => {
  // convert int value from props to css px parameter
  const loader_width = loader_size + "px";
  // calculate loader line width according to loader size
  const loader1_border = `${loader_size}` / 5.25 + "px";
  const loader2_border = `${loader_size}` / 7 + "px";
  const loader3_border = `${loader_size}` / 10.5 + "px";
  const loader4_border = `${loader_size}` / 21 + "px";

  return (
    <div
      style={{
        width: loader_width,
        height: loader_width,
      }}
    >
      <div className="loader1" style={{ borderWidth: loader1_border }}></div>
      <div className="loader2" style={{ borderWidth: loader2_border }}></div>
      <div className="loader3" style={{ borderWidth: loader3_border }}></div>
      <div className="loader4" style={{ borderWidth: loader4_border }}></div>
    </div>
  );
};

Loader.propTypes = { loader_size: PropTypes.number.isRequired };

export default Loader;
