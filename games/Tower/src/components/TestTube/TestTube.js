import React from "react";
import PropTypes from "prop-types";
import Glass from "../../Solver/Glass";
import Ball from "../Ball/Ball";
import "./TestTube.css";

function TestTube(props) {
  const { glass, active, onClick } = props;
  const balls = glass.getAllBalls();
  const createKey = (color, index) => `${index}:${color}`;
  return (
    <div
      className={`TestTube ${active ? "active" : ""}`}
      onClick={() => onClick()}
      role="button"
      tabIndex={0}
      onKeyPress={({ key }) => {
        if (key === "Enter") {
          onClick();
        }
      }}
    >
      <div className="BallWrapper">
        {balls.map((color, index) => (
          <Ball key={createKey(color, index)} color={color} />
        ))}
      </div>
    </div>
  );
}

TestTube.propTypes = {
  glass: PropTypes.instanceOf(Glass).isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

TestTube.defaultProps = {
  active: false,
  onClick: () => {},
};

export default TestTube;
