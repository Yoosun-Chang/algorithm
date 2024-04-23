const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("문자열을 입력하세요: ", (input) => {
    const result = input.split('').map(char => {
        if (char.toUpperCase() === char) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
    
    console.log('변환된 문자열:', result);
    
    rl.close();
});
