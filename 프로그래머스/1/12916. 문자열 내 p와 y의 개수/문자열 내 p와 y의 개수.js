function solution(str) {
    let pCount = 0;
    let yCount = 0;

    // 대소문자 구분 없애기 위해 모두 소문자로 변환
    str = str.toLowerCase();

    // 문자열 순회하면서 'p'와 'y' 개수 세기
    for (let char of str) {
        if (char === 'p') {
            pCount++;
        } else if (char === 'y') {
            yCount++;
        }
    }

    // 'p'와 'y'의 개수가 같으면 true, 다르면 false
    return pCount === yCount;
}