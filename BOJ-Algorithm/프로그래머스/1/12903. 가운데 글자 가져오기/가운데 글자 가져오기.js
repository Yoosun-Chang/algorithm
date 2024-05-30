function solution(s) {
    // 문자열의 길이가 짝수인 경우
    if (s.length % 2 === 0) {
        // 가운데 두 문자를 반환합니다.
        return s.slice((s.length / 2) - 1, (s.length / 2) + 1);
    } 
    // 문자열의 길이가 홀수인 경우
    else {
        // 가운데 한 문자를 반환합니다.
        return s[Math.floor(s.length / 2)];
    }
}
