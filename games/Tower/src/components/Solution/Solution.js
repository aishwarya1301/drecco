import React from "react";
import PropTypes from "prop-types";
import Glass from "../../Solver/Glass";
import Move from "../../Solver/Move";
import TestTubes from "../TestTubes/TestTubes";
import Template from "../Template/Template";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button/Button";

function Solution(props) {
  const { glasses, moves, moveIndex, onNext, onPrevious, onRestart } = props;
  return (
    <Template testTubes={<TestTubes glasses={glasses} />}>
      <SolutionNavigator
        currentMove={moveIndex}
        numberOfMoves={moves.length}
        onNext={() => onNext()}
        onPrevious={() => onPrevious()}
        onRestart={() => onRestart()}
      />
    </Template>
  );
}

Solution.propTypes = {
  glasses: PropTypes.arrayOf(PropTypes.instanceOf(Glass)).isRequired,
  moves: PropTypes.arrayOf(PropTypes.instanceOf(Move)).isRequired,
  moveIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};

function SolutionNavigator(props) {
  const { currentMove, numberOfMoves, onNext, onPrevious, onRestart } = props;
  return (
    <Sidebar>
      <p>
        {currentMove} / {numberOfMoves}
      </p>
      <Button
        text="Next"
        disabled={currentMove >= numberOfMoves}
        onClick={() => onNext()}
      />
      <Button
        text="Previous"
        disabled={currentMove <= 0}
        onClick={() => onPrevious()}
      />
      <Button text="Restart" onClick={() => onRestart()} />
    </Sidebar>
  );
}

SolutionNavigator.propTypes = {
  currentMove: PropTypes.number.isRequired,
  numberOfMoves: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default Solution;
