// import autoBind from "auto-bind";
import Move from "./Move.js";

class Board {
  constructor(glasses) {
    this.glasses = glasses;
    this.numberOfColors = this.internalCalculateNumberOfColors();
    // autoBind(this);
    this.isGlassComplete = this.isGlassComplete.bind(this);
    this.isComplete = this.isComplete.bind(this);
    this.calculateAllPotentialMoves = this.calculateAllPotentialMoves.bind(this);
    this.moveBall = this.moveBall.bind(this);
    this.getGlasses = this.getGlasses.bind(this);
    this.clone = this.clone.bind(this);
    this.toString = this.toString.bind(this);
    this.internalGetGlass = this.internalGetGlass.bind(this);
    this.internalCalculateNumberOfColors = this.internalCalculateNumberOfColors.bind(this);
    this.internalFindAllGlassIndexesThatCanMoveToGlass = this.internalFindAllGlassIndexesThatCanMoveToGlass.bind(this);
  }

  isGlassComplete(glassIndex) {
    const glass = this.internalGetGlass(glassIndex);
    return glass.isFull() && glass.hasOnlySingleColorBalls();
  }

  isComplete() {
    const completedGlasses = this.glasses.filter((_, index) =>
      this.isGlassComplete(index)
    );
    return completedGlasses.length === this.numberOfColors;
  }

  calculateAllPotentialMoves() {
    const moves = [];
    this.glasses.forEach((toGlass, toIndex) => {
      if (toGlass.isFull()) {
        return;
      }
      const fromIndexes = this.internalFindAllGlassIndexesThatCanMoveToGlass(
        toIndex
      );
      fromIndexes.forEach((fromIndex) => {
        moves.push(new Move(fromIndex, toIndex));
      });
    });
    return moves;
  }

  moveBall(move) {
    const ballToMove = this.internalGetGlass(move.from).pop();
    this.internalGetGlass(move.to).push(ballToMove);
  }

  getGlasses() {
    return this.glasses;
  }

  clone() {
    const newGlasses = this.glasses.map((glass) => glass.clone());
    return new Board(newGlasses);
  }

  toString() {
    let str = "";
    this.glasses.forEach((glass, index) => {
      str += glass.toString();
      if (index !== this.numberOfGlasses - 1) {
        str += "\n";
      }
    });
    return str;
  }

  internalGetGlass(glassIndex) {
    return this.glasses[glassIndex];
  }

  internalCalculateNumberOfColors() {
    const colors = new Set();
    this.glasses.forEach((glass) => {
      const balls = glass.getAllBalls();
      balls.forEach((ball) => colors.add(ball));
    });
    return colors.size;
  }

  internalFindAllGlassIndexesThatCanMoveToGlass(toIndex) {
    const toGlass = this.internalGetGlass(toIndex);
    return this.glasses
      .map((fromGlass, fromIndex) => ({ fromGlass, fromIndex }))
      .filter(({ fromIndex }) => fromIndex !== toIndex)
      .filter(({ fromGlass }) => !fromGlass.isEmpty())
      .filter(
        ({ fromGlass }) =>
          toGlass.isEmpty() || toGlass.top() === fromGlass.top()
      )
      .map(({ fromIndex }) => fromIndex);
  }
}

export default Board;
