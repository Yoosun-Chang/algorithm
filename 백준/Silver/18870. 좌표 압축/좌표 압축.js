let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);

let arr = input[1].split(' ').map(Number);

let uniqueWords = [...new Set(arr)];
uniqueWords.sort((a, b) => a - b);

let indexMap = new Map();
uniqueWords.forEach((num, index) => {
    indexMap.set(num, index);
});

let answer = arr.map(num => indexMap.get(num)).join(' ');

console.log(answer);