const nums = [0,2,1,5,3,4];

function arrFromPermutation(nums) {
    const result = [];
    for(n of nums) {
        result.push(nums[n])

    }
    return result;
}

console.log(arrFromPermutation(nums)) // 0, 1, 2, 4, 5, 3