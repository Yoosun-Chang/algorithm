/*
영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
단, 소숫점 자리는 모두 버립니다.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    input = input.split(' ').map(el => parseInt(el)); // 문자열을 공백으로 분할하고 정수 배열로 변환
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    let answer = Math.floor(sum / input.length); // 소숫점 자리를 버림
    console.log(answer);
    rl.close();
});
