const n = 4;

function powerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;

}

console.log(powerOfTwo(n)) // true