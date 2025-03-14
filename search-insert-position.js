const nums = [1,3,4,6]
const target = 5

function searchInsertPosition(nums, target) {
    if(nums.includes(target)) {
        return nums.indexOf(target)
    } else if(!nums.includes(target)){
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > target) {
                nums.splice(i, 0, target)
                return nums.indexOf(target)
            } else if(i === nums.length - 1) {
                return nums.length
            }
        }
    } 
}

console.log(searchInsertPosition(nums, target));