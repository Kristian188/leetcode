//Select the two smallest integers x and y from nums.
// Remove x and y from nums.
// Insert (min(x, y) * 2 + max(x, y)) at any position in the array.
// Note that you can only apply the described operation if nums contains at least two elements.
// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

const nums = [1,1,2,4,9];
const k = 20;



function minOperations(nums, k) {
    
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