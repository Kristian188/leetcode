const nums = [1,1,2,4,9];
const k = 20;



var minOperations = function(nums, k) {
    
    nums.sort((a, b) => a - b);
    let operations = 0;
    
    while (nums[0] < k) {
        if (nums.length < 2) return -1;
        let min1 = nums.shift();
        let min2 = nums.shift();
        let newNum = min1 * 2 + min2;
        
        let left = 0, right = nums.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < newNum) left = mid + 1;
            else right = mid;
        }
        nums.splice(left, 0, newNum);
        
        operations++;
    }
    
    return operations;
}
console.log(minOperations(nums, k));