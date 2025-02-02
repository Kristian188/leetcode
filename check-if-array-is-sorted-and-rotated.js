// Given an array nums, return true 
// if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). 
// Otherwise, return false.

const nums = [5,8,1]


function check(nums) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
        if (count > 1) return false;
    }
    
    return true;
}

console.log(check(nums))