const fs = require('fs');
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const n = input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let answer = "";
for (let i = 0; i<arr.length; i++) {
    answer += arr[i] + '\n';
}

console.log(answer);