const s = "g0";

function clearDigits(s) {
    let resultArr = [];
    for (let j = 0; j < s.length; j++) {
        resultArr.push(s[j]);
    }

    for (let i = 0; i < resultArr.length; i++) {
        if (!isNaN(resultArr[i]) && resultArr[i] !== " ") {

            resultArr.splice(i, 1);
            i--;

            if (i >= 0 && isNaN(resultArr[i])) {
                resultArr.splice(i, 1);
                i--;
            }
        }
    }

    return resultArr.join("");
}

console.log(clearDigits(s));