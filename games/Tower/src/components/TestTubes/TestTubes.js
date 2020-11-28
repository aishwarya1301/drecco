import React from "react";
import PropTypes from "prop-types";
import Glass from "../../Solver/Glass";
import TestTube from "../TestTube/TestTube";
import "./TestTubes.css";

function TestTubes(props) {
  const { glasses, activeGlass, onTestTubeClick } = props;
  const createKey = (glass, index) => `${index}:${glass.toString()}`;
  return (
    <div className="TestTubes">
      {glasses.map((glass, index) => (
        <div key={createKey(glass, index)} className="TestTubeWrapper">
          <TestTube
            glass={glass}
            active={index === activeGlass}
            onClick={() => onTestTubeClick(index)}
          />
        </div>
      ))}
    </div>
  );
}

TestTubes.propTypes = {
  glasses: PropTypes.arrayOf(PropTypes.instanceOf(Glass)).isRequired,
  activeGlass: PropTypes.number,
  onTestTubeClick: PropTypes.func,
};

TestTubes.defaultProps = {
  activeGlass: -1,
  onTestTubeClick: () => {},
};

export default TestTubes;
