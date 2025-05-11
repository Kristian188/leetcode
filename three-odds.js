const nums = [1,2,1,1];

function threeOdds(nums) {
    let counter = 0
    for(let n of nums) {
        if (n % 2 !== 0) {
            counter++;
        }
        if(n % 2 === 0) {
            counter = 0;
        }
        if (counter === 3) {
            return true;
        }
    }
    return false
}
console.log(threeOdds(nums)); // false