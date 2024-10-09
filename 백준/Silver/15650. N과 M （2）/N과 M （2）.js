const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N, M;
let result = [];

rl.on('line', (line) => {
    [N, M] = line.split(' ').map(Number);
    backtrack(1, 0);
    rl.close();
});

function backtrack(start, depth) {
    // M개의 숫자를 모두 선택한 경우 출력
    if (depth === M) {
        console.log(result.join(' '));
        return;
    }

    // start부터 N까지의 숫자를 순회
    for (let i = start; i <= N; i++) {
        result.push(i); // 숫자 i를 선택
        backtrack(i + 1, depth + 1); // 다음 숫자를 선택하기 위해 재귀 호출
        result.pop(); // 백트래킹 - 선택한 숫자를 제거
    }
}
