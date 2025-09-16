scoresTest = [100, 20, 55, 20, 99]
function dropLowest(scores) {
    let lowest = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[lowest] > scores[i]) {
            lowest = i;
        }
    }
    scores.splice(lowest, 1);
    return scores;
}
console.log(scoresTest);
console.log(dropLowest(scoresTest));
