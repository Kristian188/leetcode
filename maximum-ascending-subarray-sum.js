const nums = [6];

let maxResult = 0;


function check(nums) {
    let curResult = nums[0];
    if(nums.length === 1) {
        return nums[0]
    }
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