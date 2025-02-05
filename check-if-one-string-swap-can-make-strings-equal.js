// You are given two strings s1 and s2 of equal length. A string swap is an operation 
// where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. 
// Otherwise, return false.


let s1 = "aa";
let s2 = "ac";

function check(s1, s2) {
    let difference = 0;
    let sortedS1 = s1.split("").sort().join("");
    let sortedS2 = s2.split("").sort().join("");

    if (sortedS1 === sortedS2) {

        for (let i = 0; i < s1.length; i++) {

            if (s1[i] !== s2[i]) {
                difference++
            }
            if (difference === 3) {
                return false
            }

        }
        return true
    } else {
        return false;
    }
}

console.log(check(s1, s2))