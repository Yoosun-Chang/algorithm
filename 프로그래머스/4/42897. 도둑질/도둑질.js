function solution(money) {
    const n = money.length;
    
    // 예외 처리: 집이 하나인 경우
    if (n === 1) return money[0];

    // 첫 번째 집을 터는 경우
    const dp1 = Array(n).fill(0);
    dp1[0] = money[0];
    dp1[1] = Math.max(money[0], money[1]);
    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
    }

    // 첫 번째 집을 안 터는 경우
    const dp2 = Array(n).fill(0);
    dp2[0] = 0;
    dp2[1] = money[1];
    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
    }

    // 두 경우의 최대값 반환
    return Math.max(dp1[n - 2], dp2[n - 1]);
}

// 테스트 예제
const money = [1, 2, 3, 1];
console.log(solution(money)); // 출력: 4
