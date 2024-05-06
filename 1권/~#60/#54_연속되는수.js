const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sol(l) {
    l.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < l.length - 1; i++) {
        if (l[i] + 1 !== l[i + 1]) {
            return 'NO';
        }
    }
    return 'YES';
}

// 입력을 받아서 처리하는 부분
rl.question("숫자를 입력하세요: ", (input) => {
    const numbers = input.split(' ').map(n => parseInt(n, 10));
    const result = sol(numbers);
    console.log(result);
    rl.close(); // 입력이 종료되면 readline을 종료합니다.
});
