function findDistinctElements(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const distinctNums1 = [];
  const distinctNums2 = [];

  for (const num of set1) {
    if (!set2.has(num)) {
      distinctNums1.push(num);
    }
  }

  for (const num of set2) {
    if (!set1.has(num)) {
      distinctNums2.push(num);
    }
  }

  return [distinctNums1, distinctNums2];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const answer = findDistinctElements(nums1, nums2);
console.log(answer); // Output: [[1, 3], [4, 6]]