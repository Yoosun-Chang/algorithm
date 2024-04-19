/*
한 줄에 여러개의 숫자가 입력되면, 
역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    let numbers = input.split(" "); // 문자열을 공백으로 분할하여 배열로 만듭니다.
    let reversedNumbers = numbers.reverse().join(" "); // 배열을 뒤집고 다시 문자열로 결합합니다.
    console.log(reversedNumbers);
    rl.close();
});