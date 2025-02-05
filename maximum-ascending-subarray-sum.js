// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

const nums = [1, 2, 3, 4, 0];



function check(nums) {
    let maxResult = nums[0];
    let curResult = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) {
            curResult += nums[i]
            maxResult = Math.max(maxResult, curResult)

            
        } else {
            maxResult = Math.max(maxResult, curResult)
            curResult = 0
            curResult += nums[i];
        }
        maxResult = Math.max(maxResult, curResult)

    }
    return maxResult;
}

console.log(check(nums))