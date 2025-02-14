const s = "MCMXCIV";

function romanToInteger(s) {
    let string = s.split("")

    let result = 0;    
    let oneCheck = false;
    let fiveCheck = false;
    let tenCheck = false;
    let fiftyCheck = false;
    let hundredCheck = false;
    let fiveHundredCheck = false;
    let thousandCheck = false;
    for(let i = string.length - 1; i >= 0; i--) {
        if(string[i] === "I" && fiveCheck === false && tenCheck === false && fiftyCheck === false && hundredCheck === false && fiveHundredCheck === false && thousandCheck === false) {
            result += 1;
            oneCheck = true;
        } else if(string[i] === "I" && (fiveCheck !== false || tenCheck !== false || fiftyCheck !== false || hundredCheck !== false || fiveHundredCheck !== false || thousandCheck !== false)) {
            result -= 1;
        }
        if(string[i] === "V" && tenCheck === false && fiftyCheck === false && hundredCheck === false && fiveHundredCheck === false && thousandCheck === false) {
            result += 5;
            fiveCheck = true;
        }
        if(string[i] === "X" && fiftyCheck === false && hundredCheck === false && fiveHundredCheck === false && thousandCheck === false) {
            result += 10;
            tenCheck = true;
        } else if((string[i] === "X") && (fiftyCheck !== false || hundredCheck !== false || fiveHundredCheck !== false || thousandCheck !== false)) {
            result -= 10;
        }
        if(string[i] === "L" && hundredCheck === false && fiveHundredCheck === false && thousandCheck === false) {
            result += 50;
            fiftyCheck = true;
        }
        if(string[i] === "C" && fiveHundredCheck === false && thousandCheck === false) {
            result += 100;
            hundredCheck = true;
        } else if((string[i] === "C") && (fiveHundredCheck !== false || thousandCheck !== false)) {
            result -= 100;
        }
        if(string[i] === "D" && thousandCheck === false) {
            result += 500;
            fiveHundredCheck = true;
        }
        if(string[i] === "M") {
            result += 1000;
            thousandCheck = true;
        }
        



        
    }
    return result;

}
console.log(romanToInteger(s))