function solution(numbers) {
    // 숫자를 문자열로 변환하여 정렬합니다.
    numbers.sort((a, b) => {
        const ab = String(a) + String(b);
        const ba = String(b) + String(a);
        return ba.localeCompare(ab); // 두 조합의 사전 순으로 비교
    });
    
    // 정렬된 숫자들을 이어붙이고, 결과가 '0'인 경우에는 '0'을 반환
    const answer = numbers.join('');
    return answer[0] === '0' ? '0' : answer;
}
