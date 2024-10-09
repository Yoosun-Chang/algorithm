const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
let result = [];
let visited = [];

rl.on('line', (line) => {
    N = parseInt(line);
    visited = Array(N + 1).fill(false);
    backtrack(0);
    rl.close();
});

function backtrack(depth) {
    // N개의 숫자를 모두 선택한 경우 출력
    if (depth === N) {
        console.log(result.join(' '));
        return;
    }

    // 1부터 N까지의 숫자를 순회
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            // 숫자 i를 선택하고 방문 표시
            visited[i] = true;
            result.push(i);

            // 다음 단계로 재귀 호출
            backtrack(depth + 1);

            // 백트래킹 - 숫자 i를 다시 선택 가능하도록 설정
            result.pop();
            visited[i] = false;
        }
    }
}
