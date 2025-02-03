const nums = [1, 2, 3, 4, 1, 2];

function longestMonotonicSubarray(nums) {
    let increasing = 1;
    let decreasing = 1;
    let maxCount = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increasing++;
            decreasing = 1;
        } else if (nums[i] < nums[i - 1]) {
            decreasing++;
            increasing = 1;
        } else {
            increasing = 1;
            decreasing = 1;
        }

        maxCount = Math.max(maxCount, increasing, decreasing);
    }

    return maxCount;

    
};
console.log(longestMonotonicSubarray(nums))


