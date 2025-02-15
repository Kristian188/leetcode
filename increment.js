const digits = [9,9,9,9,9]; 
function increment(digits) {
    let lastDigit = digits[digits.length - 1];
    lastDigit++;
    digits.pop();
    digits.push(lastDigit);
    while(digits.includes(10)) {
        if (digits[0] === 10) {
            digits.shift();
            digits.unshift(0);
            digits.unshift(1);
            return digits;
        } 
        let indexTen = digits.indexOf(10);
        digits.splice(indexTen, 1, 0);
        digits[indexTen - 1]++;

    }
    return digits;
}

console.log(increment(digits)); // [1,0,0,0,0,0]