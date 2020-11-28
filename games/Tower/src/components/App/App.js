import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactGA from "react-ga";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Configurator from "../Configurator/Configurator";
import Solution from "../Solution/Solution";
import Glass from "../../Solver/Glass";
import Board from "../../Solver/Board";
import Solver from "../../Solver/Solver";

const STAGE_CONFIGURATION = "configuration";
const STAGE_SOLUTION = "solution";

const colorMap = {
  RED: "#c52b23",
  BLUE: "#3b2fc3",
  PURPLE: "#722b93",
  YELLOW: "#f1da58",
  GREEN: "#78970e",
  PINK: "#ea5e7b",
  AQUA: "#55a3e5",
  GREY: "#636466",
  BABY: "#61d67d",
  ORANGE: "#e88c41",
};

const colors = Object.values(colorMap);

function createGlass(arr) {
  const glass = new Glass();
  glass.pushArrayOfBalls(arr.map((idx) => colors[idx]));
  return glass;
}

const COMPLEX_BOARD = [
  createGlass([0, 1, 0, 2]),
  createGlass([1, 3, 4, 2]),
  createGlass([5, 6, 4, 4]),
  createGlass([7, 6, 3, 6]),
  createGlass([8, 5, 7, 7]),
  createGlass([0, 5, 5, 1]),
  createGlass([3, 3, 2, 0]),
  createGlass([4, 6, 8, 8]),
  createGlass([7, 2, 8, 1]),
  createGlass([]),
  createGlass([]),
];

function cloneGlasses(glasses) {
  return glasses.map((glass) => glass.clone());
}

function clearGlass(glasses, index) {
  const clonedGlasses = cloneGlasses(glasses);
  clonedGlasses.splice(index, 1, new Glass());
  return clonedGlasses;
}

function addGlass(glasses, index) {
  const clonedGlasses = cloneGlasses(glasses);
  clonedGlasses.splice(index + 1, 0, new Glass());
  return clonedGlasses;
}

function removeGlass(glasses, index) {
  const clonedGlasses = cloneGlasses(glasses);
  clonedGlasses.splice(index, 1);
  if (clonedGlasses.length === 0) {
    clonedGlasses.push(new Glass());
  }
  return clonedGlasses;
}

function addBallToGlass(glasses, index, color) {
  const clonedGlasses = cloneGlasses(glasses);
  const glass = clonedGlasses[index];
  if (!glass.isFull()) {
    glass.push(color);
  }
  return clonedGlasses;
}

function App() {
  const [activeGlass, setActiveGlass] = useState(0);
  const [stage, setStage] = useState(STAGE_CONFIGURATION);
  const [moves, setMoves] = useState([]);
  const [moveIndex, setMoveIndex] = useState(0);
  const [solutionGlasses, setSolutionGlasses] = useState([]);
  const [glasses, setGlasses] = useState(COMPLEX_BOARD);

  const onClearHandler = () => {
    setGlasses(clearGlass(glasses, activeGlass));
  };

  const onAddHandler = () => {
    setGlasses(addGlass(glasses, activeGlass));
    setActiveGlass(activeGlass + 1);
  };

  const onRemoveHandler = () => {
    setGlasses(removeGlass(glasses, activeGlass));
    setActiveGlass(Math.max(activeGlass - 1, 0));
  };

  const onColorClickHandler = (color) => {
    setGlasses(addBallToGlass(glasses, activeGlass, color));
  };

  const onTestTubeClickHandler = (index) => {
    setActiveGlass(index);
  };

  const onSolveHandler = () => {
    const board = new Board(glasses);
    const startMs = Date.now();
    const report = Solver(board);
    const endMs = Date.now();
    ReactGA.timing({
      value: endMs - startMs,
      category: "Solver",
      variable: "DFS",
      label: `${report.isSolvable ? "Solvable" : "Unsolvable"}`,
    });
    if (!report.isSolvable) {
      toast.error("This board is not solvable...", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: true,
      });
      return;
    }
    setMoveIndex(0);
    setMoves(report.moves);
    setSolutionGlasses(cloneGlasses(glasses));
    setStage(STAGE_SOLUTION);
  };

  const onNextHandler = () => {
    const move = moves[moveIndex];
    const board = new Board(solutionGlasses);
    board.moveBall(move);
    setSolutionGlasses(board.getGlasses());
    setMoveIndex(moveIndex + 1);
  };

  const onPreviousHandler = () => {
    const move = moves[moveIndex - 1];
    const board = new Board(solutionGlasses);
    board.moveBall(move.invert());
    setSolutionGlasses(board.getGlasses());
    setMoveIndex(moveIndex - 1);
  };

  const onRestartHandler = () => {
    setStage(STAGE_CONFIGURATION);
  };

  console.log("IN APPP");

  // const mystyle = {
  //     color: "white",
  //     backgroundColor: "DodgerBlue",
  //     padding: "10px",
  //     fontFamily: "Arial"
  //   };
  //   return (
  //     <div>
  //     <h1 style={mystyle}>Hello Style!</h1>
  //     <p>Add a little style!</p>
  //     </div>
  //   );
    
  return (
    <div className="App">
      <ToastContainer />
      {/* {stage === STAGE_CONFIGURATION ? (
        <Configurator
          colors={colors}
          glasses={glasses}
          activeGlass={activeGlass}
          onTestTubeClick={onTestTubeClickHandler}
          onClear={onClearHandler}
          onAdd={onAddHandler}
          onRemove={onRemoveHandler}
          onColorClick={onColorClickHandler}
          onSolve={onSolveHandler}
        />
      ) : (
        <Solution
          glasses={solutionGlasses}
          moves={moves}
          moveIndex={moveIndex}
          onNext={onNextHandler}
          onPrevious={onPreviousHandler}
          onRestart={onRestartHandler}
        />
      )} */}
    </div>
  );
    
}

export default App;
