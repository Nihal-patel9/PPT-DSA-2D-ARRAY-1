function arrangeCoins(n) {
  let k = 0; // Number of complete rows
  while (n >= k + 1) {
    n -= k + 1; // Subtract the coins used for the current row
    k++; // Increment the number of complete rows
  }
  return k;
}

const n = 5;
const completeRows = arrangeCoins(n);
console.log(completeRows); // Output: 2