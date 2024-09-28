function solution(s) {
    const numberWords = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    let answer = '';
    let currentWord = '';

    for (let char of s) {
        // 숫자일 경우
        if (!isNaN(char)) {
            answer += char;
        } else {
            currentWord += char; // 영단어를 계속 추가
            // 현재 영단어가 numberWords에 있는지 확인
            if (numberWords[currentWord] !== undefined) {
                answer += numberWords[currentWord]; // 영단어를 숫자로 변환
                currentWord = ''; // 영단어 초기화
            }
        }
    }

    return Number(answer); // 최종적으로 변환된 숫자를 반환
}

