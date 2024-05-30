function countOnesInRange(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        const strNum = i.toString();
        count += (strNum.split('1').length - 1);
    }
    return count;
}

const onesCount = countOnesInRange(0, 1000);
console.log("0부터 1000까지의 수에서 1은 총 " + onesCount + "번 나타납니다.");
