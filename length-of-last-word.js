let word = "   fly me   to   the moon  ";

function lastWordLength(s) {
    let trimmedWord = s.trim();
    let lastWord = trimmedWord.split(" ").pop();
    return lastWord.length;
}

console.log(lastWordLength(s));