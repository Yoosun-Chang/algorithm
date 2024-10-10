function solution(N, number) {
    if (N === number) return 1; // N이 이미 목표 숫자와 같은 경우

    const dp = Array.from({ length: 9 }, () => new Set());

    // N을 i번 사용한 값 초기화
    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(N.toString().repeat(i))); // 예: N=5, i=3 -> 555

        for (let j = 1; j < i; j++) {
            for (const num1 of dp[j]) {
                for (const num2 of dp[i - j]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    if (num2 !== 0) dp[i].add(Math.floor(num1 / num2)); // 나눗셈 결과 정수 처리
                }
            }
        }

        // 목표 숫자 검사
        if (dp[i].has(number)) {
            return i;
        }
    }

    return -1; // 8번을 초과해도 목표 숫자를 만들 수 없는 경우
}
