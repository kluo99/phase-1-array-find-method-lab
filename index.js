// code your solution here

function checkWin(dub) {
    return dub.result === "W";
}

function superbowlWin(arr) {
    let winRecord = arr.find(checkWin);
    if (winRecord) {
        return winRecord.year;
    }
}

