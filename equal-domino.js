const dominoes = [[1,2],[2,1],[2,1],[5,6]];

function equalDomino(dominoes) {
    let dominoCount = 0;
   

    for(let i = 0; i < dominoes.length; i++) {
 
            for (let j = i + 1; j < dominoes.length; j++) {
                if ((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1]) || (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])) {
                    dominoCount++
                }
            }

    }
    return dominoCount;


}
console.log(equalDomino(dominoes)) // 3



