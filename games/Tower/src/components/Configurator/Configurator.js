import React from "react";
import PropTypes from "prop-types";
import Glass from "../../Solver/Glass";
import TestTubes from "../TestTubes/TestTubes";
import Template from "../Template/Template";
import Sidebar from "../Sidebar/Sidebar";
import Ball from "../Ball/Ball";
import Button from "../Button/Button";
import "./Configurator.css";

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
    onSolve,
  } = props;
  return (
    <Template
      testTubes={
        <TestTubes
          glasses={glasses}
          activeGlass={activeGlass}
          onTestTubeClick={(index) => onTestTubeClick(index)}
        />
      }
    >
      <Toolbox
        colors={colors}
        onClear={() => onClear()}
        onAdd={() => onAdd()}
        onRemove={() => onRemove()}
        onColorClick={(color) => onColorClick(color)}
        onSolve={() => onSolve()}
      />
    </Template>
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
  onSolve: PropTypes.func,
};

Configurator.defaultProps = {
  onTestTubeClick: () => {},
  onClear: () => {},
  onAdd: () => {},
  onRemove: () => {},
  onColorClick: () => {},
  onSolve: () => {},
};

function Toolbox(props) {
  const { colors, onColorClick, onAdd, onClear, onRemove, onSolve } = props;
  return (
    <Sidebar>
      <div className="BallWrapper">
        {colors.map((color) => (
          <div key={color} className="SingleBallWrapper">
            <Ball color={color} onClick={() => onColorClick(color)} />
          </div>
        ))}
      </div>
      <Button text="CLEAR" onClick={() => onClear()} />
      <Button text="ADD" onClick={() => onAdd()} />
      <Button text="REMOVE" onClick={() => onRemove()} />
      <Button text="SOLVE" onClick={() => onSolve()} />
    </Sidebar>
  );
}

Toolbox.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorClick: PropTypes.func,
  onAdd: PropTypes.func,
  onClear: PropTypes.func,
  onRemove: PropTypes.func,
  onSolve: PropTypes.func,
};

Toolbox.defaultProps = {
  onColorClick: () => {},
  onAdd: () => {},
  onClear: () => {},
  onRemove: () => {},
  onSolve: () => {},
};

export default Configurator;
