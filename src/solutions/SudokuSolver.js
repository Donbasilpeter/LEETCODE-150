const SudokuSolver = function (board) {
  let hash = new Set();
  let val = 0;
  for (let i = 0; i < 9; i++) {
    hash = new Set();
    val = 0;
    for (let j = 0; j < 9; j++) {
      val = board[i][j];
      if (val != ".") {
        if (hash.has(val)) return false;
        else hash.add(val);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    hash = new Set();
    val = 0;
    for (let j = 0; j < 9; j++) {
      val = board[j][i];
      if (val != ".") {
        if (hash.has(val)) return false;
        else hash.add(val);
      }
    }
  }
  for (let l = 0; l < 9; l = l + 3) {
    hash = new Set();
    for (let k = 0; k < 9; k = k + 3) {
      hash = new Set();
      for (let i = l; i < l + 3; i++) {
        val = 0;
        for (let j = k; j < k + 3; j++) {
          val = board[j][i];
          if (val != ".") {
            if (hash.has(val)) return false;
            else hash.add(val);
          }
        }
      }
    }
  }
  return true;
};

export default SudokuSolver;