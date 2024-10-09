const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let index = 0;

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    let T = parseInt(input[index++]);
    let results = [];

    for (let t = 0; t < T; t++) {
        const [M, N, K] = input[index++].split(' ').map(Number);
        const field = Array.from({ length: N }, () => Array(M).fill(0));
        const visited = Array.from({ length: N }, () => Array(M).fill(false));
        let count = 0;

        // 배추 심기
        for (let i = 0; i < K; i++) {
            const [x, y] = input[index++].split(' ').map(Number);
            field[y][x] = 1;
        }

        // 상하좌우 방향 벡터
        const dx = [0, 0, -1, 1];
        const dy = [-1, 1, 0, 0];

        // DFS 함수
        function dfs(x, y) {
            visited[y][x] = true;

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
                    if (!visited[ny][nx] && field[ny][nx] === 1) {
                        dfs(nx, ny);
                    }
                }
            }
        }

        // 모든 위치를 탐색하여 배추 군집 찾기
        for (let y = 0; y < N; y++) {
            for (let x = 0; x < M; x++) {
                if (field[y][x] === 1 && !visited[y][x]) {
                    // 새로운 배추 군집 발견
                    dfs(x, y);
                    count++;
                }
            }
        }

        results.push(count);
    }

    // 결과 출력
    console.log(results.join('\n'));
    process.exit();
});
