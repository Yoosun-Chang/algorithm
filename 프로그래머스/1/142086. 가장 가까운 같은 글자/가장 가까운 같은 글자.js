function solution(s) {
    const result = [];
    const charIndexMap = {}; // 각 문자의 가장 최근 인덱스를 저장하는 객체

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in charIndexMap) {
            // 같은 문자가 이미 등장한 경우
            result.push(i - charIndexMap[char]);
        } else {
            // 같은 문자가 처음 등장하는 경우
            result.push(-1);
        }

        // 현재 문자의 인덱스를 저장
        charIndexMap[char] = i;
    }

    return result;
}

// 사용 예
console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
