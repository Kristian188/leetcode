const tops = [2,1,2,4,2,2];
const bottoms = [5,2,6,2,3,2];


const domino = function(tops, bottoms) {
    for (let x = 1; x <= 6; x++) {
        let topRotations = 0;
        let bottomRotations = 0;
        let possible = true;

        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== x && bottoms[i] !== x) {
                possible = false;
                break;
            }
            if (tops[i] !== x) {
                topRotations++;
            }
            if (bottoms[i] !== x) {
                bottomRotations++;
            }
        }

        if (possible) {
            return Math.min(topRotations, bottomRotations);
        }
    }

    return -1;
};

console.log(domino(tops, bottoms));  //  2


