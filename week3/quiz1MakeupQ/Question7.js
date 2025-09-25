scores = [22, 300, 59, 68, 50]
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
console.log(scores);
console.log(dropLowest(scores));
