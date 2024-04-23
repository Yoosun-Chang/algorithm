/*
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("숫자를 입력하세요: ", (input) => {
    const numbers = input.split(' ').map(char => parseInt(char));
    numbers.sort((a, b) => b - a); // 내림차순으로 정렬
    console.log('최댓값:', numbers[0]); // 정렬된 배열의 첫 번째 요소가 최댓값
    rl.close();
});
