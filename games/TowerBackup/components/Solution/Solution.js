// import React from "react";
// import PropTypes from "prop-types";
import Glass from "../../Solver/Glass.js";
import Move from "../../Solver/Move.js";
import TestTubes from "../TestTubes/TestTubes.js";
import Template from "../Template/Template.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Button from "../Button/Button.js";

function Solution(props) {
  const { glasses, moves, moveIndex, onNext, onPrevious, onRestart } = props;
  return React.createElement(
    Template,
    { testTubes: React.createElement(TestTubes, { glasses: glasses }) },
    React.createElement(SolutionNavigator, {
      currentMove: moveIndex,
      numberOfMoves: moves.length,
      onNext: () => onNext(),
      onPrevious: () => onPrevious(),
      onRestart: () => onRestart()
    })
  );
}

Solution.propTypes = {
  glasses: PropTypes.arrayOf(PropTypes.instanceOf(Glass)).isRequired,
  moves: PropTypes.arrayOf(PropTypes.instanceOf(Move)).isRequired,
  moveIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired
};

function SolutionNavigator(props) {
  const { currentMove, numberOfMoves, onNext, onPrevious, onRestart } = props;
  return React.createElement(
    Sidebar,
    null,
    React.createElement(
      "p",
      null,
      currentMove,
      " / ",
      numberOfMoves
    ),
    React.createElement(Button, {
      text: "Next",
      disabled: currentMove >= numberOfMoves,
      onClick: () => onNext()
    }),
    React.createElement(Button, {
      text: "Previous",
      disabled: currentMove <= 0,
      onClick: () => onPrevious()
    }),
    React.createElement(Button, { text: "Restart", onClick: () => onRestart() })
  );
}

SolutionNavigator.propTypes = {
  currentMove: PropTypes.number.isRequired,
  numberOfMoves: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired
};

export default Solution;

