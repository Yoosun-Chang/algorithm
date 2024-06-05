let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]); // 사람의 수
let arr = input[1].split(' ').map(Number); // 모든 처리 시간 입력받기

arr.sort((a, b) => a - b);

let answer = 0;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    answer += sum;
}

console.log(answer);