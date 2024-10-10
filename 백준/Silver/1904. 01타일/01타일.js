const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const N = parseInt(line.trim());
    rl.close();

    // DP 배열 초기화
    const dp = new Array(N + 1).fill(0);
    dp[1] = 1;
    if (N > 1) {
        dp[2] = 2;
    }

    // DP 점화식 적용
    for (let i = 3; i <= N; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
    }

    // 결과 출력
    console.log(dp[N]);
});
