let nums1 = [12, 6, 1, 2, 7];

function maxValue(nums) {
    const n = nums.length;
    

    const maxLeft = new Array(n).fill(0);
    const maxRight = new Array(n).fill(0);

    maxLeft[0] = nums[0];
    for (let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], nums[i - 1]);
    }

    maxRight[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], nums[i + 1]);
    }
    
    let maxValue = 0;
    for (let j = 1; j < n - 1; j++) {
        const value = (maxLeft[j] - nums[j]) * maxRight[j];
        maxValue = Math.max(maxValue, value);
    }
    
    return maxValue > 0 ? maxValue : 0;
}
console.log(maxValue(nums1));  // Output: 77
