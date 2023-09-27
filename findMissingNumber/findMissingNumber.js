function findMissingNumber(nums) {
    const n = nums.length;
    let total = (n * (n + 1)) / 2;
    for (let i = 0; i < n; i++) {
      total -= nums[i];
    }
    return total;
  }
  

  const nums1 = [3, 0, 1];
  console.log(findMissingNumber(nums1)); // Output: 2
  

  const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  console.log(findMissingNumber(nums2)); // Output: 8
  

  const nums3 = [0, 1];
  console.log(findMissingNumber(nums3)); // Output: 2
  