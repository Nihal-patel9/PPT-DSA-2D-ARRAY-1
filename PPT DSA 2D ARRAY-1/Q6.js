function sortedSquares(nums) {
  const squaredArray = nums.map((num) => num * num); // Square each element
  squaredArray.sort((a, b) => a - b); // Sort the squared array in non-decreasing order
  return squaredArray;
}

const nums = [-4, -1, 0, 3, 10];
const squaredArray = sortedSquares(nums);
console.log(squaredArray); // Output: [0, 1, 9, 16, 100]