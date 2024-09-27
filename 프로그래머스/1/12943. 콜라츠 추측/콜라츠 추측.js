function solution(num) {
    var answer = 0;

    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;  // 짝수일 경우 2로 나눕니다.
        } else {
            num = num * 3 + 1;  // 홀수일 경우 3을 곱하고 1을 더합니다.
        }
        answer++;  // 단계 수 증가
        if (answer > 500) return -1;  // 500 단계를 초과하면 -1 반환
    }
    
    return answer;  // 단계 수 반환
}
