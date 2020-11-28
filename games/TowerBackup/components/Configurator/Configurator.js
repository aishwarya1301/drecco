// import React from "react";
// import PropTypes from "prop-types";
import Glass from "../../Solver/Glass.js";
import TestTubes from "../TestTubes/TestTubes.js";
import Template from "../Template/Template.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Ball from "../Ball/Ball.js";
import Button from "../Button/Button.js";
// import "./Configurator.css";
// require("./Configurator.css");

function Configurator(props) {
  const {
    glasses,
    colors,
    activeGlass,
    onTestTubeClick,
    onClear,
    onAdd,
    onRemove,
    onColorClick,
    onSolve
  } = props;
  return React.createElement(
    Template,
    {
      testTubes: React.createElement(TestTubes, {
        glasses: glasses,
        activeGlass: activeGlass,
        onTestTubeClick: index => onTestTubeClick(index)
      })
    },
    React.createElement(Toolbox, {
      colors: colors,
      onClear: () => onClear(),
      onAdd: () => onAdd(),
      onRemove: () => onRemove(),
      onColorClick: color => onColorClick(color),
      onSolve: () => onSolve()
    })
  );
}

Configurator.propTypes = {
  glasses: PropTypes.arrayOf(PropTypes.instanceOf(Glass)).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGlass: PropTypes.number.isRequired,
  onTestTubeClick: PropTypes.func,
  onClear: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onColorClick: PropTypes.func,
  onSolve: PropTypes.func
};

Configurator.defaultProps = {
  onTestTubeClick: () => {},
  onClear: () => {},
  onAdd: () => {},
  onRemove: () => {},
  onColorClick: () => {},
  onSolve: () => {}
};

function Toolbox(props) {
  const { colors, onColorClick, onAdd, onClear, onRemove, onSolve } = props;
  return React.createElement(
    Sidebar,
    null,
    React.createElement(
      "div",
      { className: "BallWrapper" },
      colors.map(color => React.createElement(
        "div",
        { key: color, className: "SingleBallWrapper" },
        React.createElement(Ball, { color: color, onClick: () => onColorClick(color) })
      ))
    ),
    React.createElement(Button, { text: "CLEAR", onClick: () => onClear() }),
    React.createElement(Button, { text: "ADD", onClick: () => onAdd() }),
    React.createElement(Button, { text: "REMOVE", onClick: () => onRemove() }),
    React.createElement(Button, { text: "SOLVE", onClick: () => onSolve() })
  );
}

Toolbox.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorClick: PropTypes.func,
  onAdd: PropTypes.func,
  onClear: PropTypes.func,
  onRemove: PropTypes.func,
  onSolve: PropTypes.func
};

Toolbox.defaultProps = {
  onColorClick: () => {},
  onAdd: () => {},
  onClear: () => {},
  onRemove: () => {},
  onSolve: () => {}
};

export default Configurator;