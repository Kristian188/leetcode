const nums = [1,1,2,2,3];

function singleNumber(nums) {
    const mapNums = new Map();
    for(let n of nums) {

        if(!mapNums.has(n)) {
            mapNums.set(n, 1)

        } else {
            mapNums.delete(n);
        }
    }
    let result = [...mapNums.keys()][0];
    return result
    

}

console.log(singleNumber(nums)) // 3