const readline = require('readline');

function compressString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // 현재 문자와 다음 문자가 같으면 count를 증가시킴
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // 다음 문자와 다르면 현재 문자와 count를 compressed에 추가
            compressed += str[i] + count;
            count = 1; // count 초기화
        }
    }

    return compressed;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("문자열을 입력하세요: ", (input_string) => {
    console.log(compressString(input_string));
    rl.close();
});