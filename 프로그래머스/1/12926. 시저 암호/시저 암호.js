function solution(s, n) {
    var answer = '';
    let arr = s.split('');

    arr = arr.map(char => {
        // 공백 문자인 경우, 그대로 반환
        if (char === ' ') return char;

        // 아스키 코드 값을 얻고 n만큼 이동
        let newCharCode = char.charCodeAt(0) + n;

        // 대문자와 소문자의 범위를 처리
        if (char >= 'A' && char <= 'Z') {
            if (newCharCode > 'Z'.charCodeAt(0)) newCharCode -= 26; // 대문자 범위 넘어가면 보정
        } else if (char >= 'a' && char <= 'z') {
            if (newCharCode > 'z'.charCodeAt(0)) newCharCode -= 26; // 소문자 범위 넘어가면 보정
        }

        return String.fromCharCode(newCharCode); // 새로운 문자로 변환
    });

    answer = arr.join(''); // 배열을 문자열로 결합
    return answer;
}

// 사용 예
console.log(solution("Hello World", 3)); // "Khoor Zruog"
