const nums = [368,369,307,304,384,138,90,279,35,396,114,328,251,364,300,191,438,467,183]
function maxPairSum(nums) {
    let numCount = new Map();
    let maxSum = -1;

    for(num of nums) {
        let digitSum = [...String(num)].reduce((a, b) => a += Number(b), 0);

        if(numCount.has(digitSum)) {
            maxSum = Math.max(maxSum, num + numCount.get(digitSum))
            numCount.set(digitSum, Math.max(numCount.get(digitSum), num))
        } else {
            numCount.set(digitSum, num)

        }
    } return maxSum
}


console.log(maxPairSum(nums));
