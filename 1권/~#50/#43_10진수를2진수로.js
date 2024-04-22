const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("숫자를 입력하세요: ", (input) => {
    const number = parseInt(input); // 입력값을 정수로 변환
    console.log(number.toString(2)); // 2진수로 변환하여 출력
    rl.close();
});
