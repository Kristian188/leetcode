const nums = [1,1,2];

function containsDuplicates(nums) {
    let removedDuplicates = new Set([...nums])
    if (removedDuplicates.size !== nums.length) {
        return true;
    } else {
        return false;
    }
}
console.log(containsDuplicates(nums));