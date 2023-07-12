
function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposedMatrix = [];

  for (let j = 0; j < numCols; j++) {
    const newRow = [];
    for (let i = 0; i < numRows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]