// import React from "react";
// import PropTypes from "prop-types";
import Glass from "../../Solver/Glass.js";
import TestTube from "../TestTube/TestTube.js";
// import "./TestTubes.css";
// require("./TestTubes.css");

function TestTubes(props) {
  const { glasses, activeGlass, onTestTubeClick } = props;
  const createKey = (glass, index) => `${index}:${glass.toString()}`;
  return React.createElement(
    "div",
    { className: "TestTubes" },
    glasses.map((glass, index) => React.createElement(
      "div",
      { key: createKey(glass, index), className: "TestTubeWrapper" },
      React.createElement(TestTube, {
        glass: glass,
        active: index === activeGlass,
        onClick: () => onTestTubeClick(index)
      })
    ))
  );
}

TestTubes.propTypes = {
  glasses: PropTypes.arrayOf(PropTypes.instanceOf(Glass)).isRequired,
  activeGlass: PropTypes.number,
  onTestTubeClick: PropTypes.func
};

TestTubes.defaultProps = {
  activeGlass: -1,
  onTestTubeClick: () => {}
};

export default TestTubes;

