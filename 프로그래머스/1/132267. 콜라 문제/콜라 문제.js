function solution(a, b, n) {
    var answer = 0;
    while (n >= a) { // 수정된 종료 조건
        answer += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a); // 정수 나눗셈 적용
    }
    return answer;
}
