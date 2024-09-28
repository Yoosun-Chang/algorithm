function solution(s) {
    // 길이가 4 또는 6인지 확인
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    // 모든 문자에 대해 숫자인지 확인
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            return false;  // 숫자가 아닌 문자가 있을 경우 false 반환
        }
    }

    return true;  // 모든 조건을 통과하면 true 반환
}