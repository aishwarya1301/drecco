// import React from "react";
// import PropTypes from "prop-types";
import Glass from "../../Solver/Glass.js";
import Ball from "../Ball/Ball.js";
// import "./TestTube.css";
// require("./TestTube.css");

function TestTube(props) {
  const { glass, active, onClick } = props;
  const balls = glass.getAllBalls();
  const createKey = (color, index) => `${index}:${color}`;
  return React.createElement(
    "div",
    {
      className: `TestTube ${active ? "active" : ""}`,
      onClick: () => onClick(),
      role: "button",
      tabIndex: 0,
      onKeyPress: ({ key }) => {
        if (key === "Enter") {
          onClick();
        }
      }
    },
    React.createElement(
      "div",
      { className: "BallWrapper" },
      balls.map((color, index) => React.createElement(Ball, { key: createKey(color, index), color: color }))
    )
  );
}

TestTube.propTypes = {
  glass: PropTypes.instanceOf(Glass).isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

TestTube.defaultProps = {
  active: false,
  onClick: () => {}
};

export default TestTube;

