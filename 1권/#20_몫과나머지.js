/*
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    input = input.split(' ').map(el => parseInt(el)); // 문자열을 공백으로 분할하고 정수 배열로 변환
    console.log(input[0]/input[1], input[0]%input[1]);
    rl.close();
});