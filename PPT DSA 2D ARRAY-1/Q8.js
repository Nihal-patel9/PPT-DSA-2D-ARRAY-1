function shuffleArray(nums, n) {
  const shuffledArray = [];

  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i]); // Add xi to the shuffled array
    shuffledArray.push(nums[i + n]); // Add yi to the shuffled array
  }

  return shuffledArray;
}

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const shuffledArray = shuffleArray(nums, n);
console.log(shuffledArray); // Output: [2, 3, 5, 4, 1, 7]