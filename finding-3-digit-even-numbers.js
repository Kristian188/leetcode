const digits = [2,1,3,0]
function findEvenNumbers(digits) {
    
    const result = new Set();

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) continue;

        for (let j = 0; j < digits.length; j++) {
            if (j === i) continue;

            for (let k = 0; k < digits.length; k++) {
                if (k === i || k === j) continue;

                if (digits[k] % 2 === 0) {
                    const num = digits[i] * 100 + digits[j] * 10 + digits[k];
                    result.add(num);
                }
            }
        }
    }

    return Array.from(result).sort((a, b) => a - b);
};
console.log(findEvenNumbers(digits))