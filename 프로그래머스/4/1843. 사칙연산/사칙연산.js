function solution(arr) {
    const n = Math.floor(arr.length / 2) + 1;

    const maxDP = Array.from({ length: n }, () => Array(n).fill(-Infinity));
    const minDP = Array.from({ length: n }, () => Array(n).fill(Infinity));

    // 초기화: 숫자들을 DP 테이블에 설정
    for (let i = 0; i < n; i++) {
        const num = parseInt(arr[i * 2]);
        maxDP[i][i] = num;
        minDP[i][i] = num;
    }

    // DP 점화식 계산
    for (let len = 1; len < n; len++) {
        for (let i = 0; i < n - len; i++) {
            const j = i + len;

            for (let k = i; k < j; k++) {
                const operator = arr[k * 2 + 1];

                if (operator === '+') {
                    maxDP[i][j] = Math.max(maxDP[i][j], maxDP[i][k] + maxDP[k + 1][j]);
                    minDP[i][j] = Math.min(minDP[i][j], minDP[i][k] + minDP[k + 1][j]);
                } else if (operator === '-') {
                    maxDP[i][j] = Math.max(maxDP[i][j], maxDP[i][k] - minDP[k + 1][j]);
                    minDP[i][j] = Math.min(minDP[i][j], minDP[i][k] - maxDP[k + 1][j]);
                }
            }
        }
    }

    // 최종 결과 반환
    return maxDP[0][n - 1];
}

// 테스트 예제
const arr = ["1", "-", "3", "+", "5", "-", "8"];
console.log(solution(arr)); // 출력: 1
