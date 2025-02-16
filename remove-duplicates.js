const nums = [1,1,2];

function noDuplicates(nums) {
    let setNums = new Set([...nums]);
    let sortedArr = Array.from(setNums);
    let k = sortedArr.length;
    return `length ${k} nums = [${sortedArr}]`;
}

console.log(noDuplicates(nums)); // length 2 nums = [1,2]
