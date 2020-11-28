// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./Ball.css";
// require("./Ball.cs");

function Ball(props) {
  const { color, onClick } = props;
  return React.createElement("div", {
    className: "Ball",
    onClick: () => onClick(),
    style: { backgroundColor: color },
    role: "button",
    tabIndex: 0,
    onKeyPress: ({ key }) => {
      if (key === "Enter") {
        onClick();
      }
    }
  });
}

Ball.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Ball.defaultProps = {
  onClick: () => {}
};

export default Ball;

