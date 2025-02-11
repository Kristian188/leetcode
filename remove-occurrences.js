const s = "axxxxyyyyb";
const part = "xy";


function removeOccurrences(s, part) {
    let stack = [];
    for (let char of s) {
        stack.push(char);
        if (stack.slice(-part.length).join("") === part) {
            stack.length -= part.length; 
        }
    }
    return stack.join("");
}

console.log(removeOccurrences(s, part));
