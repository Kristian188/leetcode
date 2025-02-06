const nums = [2, 3, 4, 6];

var tupleSameProduct = function(nums) {
    let productCount = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j];
            productCount.set(product, (productCount.get(product) || 0) + 1);
        }
    }
    
    let result = 0;
    
    for (let [prod, count] of productCount.entries()) {
        if (count > 1) {
            result += count * (count - 1) * 4;
        }
    }
    
    return result;
};
console.log(tupleSameProduct(nums));
