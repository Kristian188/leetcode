const nums = [1,2,3,4,5];

function countBadPairs(nums) {
    let n = nums.length;
    let countPairs = new Map();
    let goodPairs = 0;

    for (let i = 0; i < n; i++) {
        let key = nums[i] - i;

        if (countPairs.has(key)) {
            goodPairs += countPairs.get(key); 
        }

        countPairs.set(key, (countPairs.get(key) || 0) + 1);
    }

    let totalPairs = (n * (n - 1)) / 2;
    return totalPairs - goodPairs;
}


console.log(countBadPairs(nums))