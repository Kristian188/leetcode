// Return an array result of length n, where result[i] denotes the number of distinct colors after ith query.

const queries = [[0,1],[1,4],[1,1],[1,4],[1,1]];

function check(queries) {
    let uniqueColors = []; 
    let colorsStored = new Map();
    let colorCount = new Map();

    for (let i = 0; i < queries.length; i++) {
        let ball = queries[i][0];
        let newColor = queries[i][1];
        if (colorsStored.has(ball)) {
            let oldColor = colorsStored.get(ball);
            colorCount.set(oldColor, (colorCount.get(oldColor) || 0) - 1);

            if (colorCount.get(oldColor) === 0) {
                colorCount.delete(oldColor);
            }
        }

        colorsStored.set(ball, newColor);
        colorCount.set(newColor, (colorCount.get(newColor) || 0) + 1);
        uniqueColors.push(colorCount.size);
    }

    return uniqueColors;
}

console.log(check(queries)); 