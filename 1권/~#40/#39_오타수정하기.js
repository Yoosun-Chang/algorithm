const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    // 입력된 문장에서 모든 'q'를 'e'로 바꾸고 출력
    const result = input.replaceAll('q', 'e');
    console.log(result);
    rl.close();
});
