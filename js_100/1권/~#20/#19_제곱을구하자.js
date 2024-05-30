/* 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.*/
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    input = input.split(' ').map(el => parseInt(el)); // 문자열을 공백으로 분할하고 정수 배열로 변환
    let sum = 1;
    for(let i = 1; i <= input[1]; i++){
        sum *= input[0]
    }
    console.log(sum)
    rl.close();
});
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    input = input.split(' ').map(el => parseInt(el)); // 문자열을 공백으로 분할하고 정수 배열로 변환
    console.log(Math.pow(input[0],input[1]));
    rl.close();
});

