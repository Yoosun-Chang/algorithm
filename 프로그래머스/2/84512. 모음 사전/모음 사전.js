function solution(word) {
    // 각 자리에 올 수 있는 문자와 그 순서
    const chars = ['A', 'E', 'I', 'O', 'U'];
    let count = 0; // 단어의 순서를 카운트하는 변수
    let result = 0; // 주어진 단어의 순서를 저장할 변수

    // 재귀적으로 모든 가능한 단어를 생성하는 함수
    function dfs(currentWord) {
        // 현재 단어가 주어진 단어와 같다면, 그때의 count 값을 결과로 저장
        if (currentWord === word) {
            result = count;
            return;
        }

        // 현재 단어가 5글자를 초과하면 더 이상 탐색하지 않음
        if (currentWord.length > 5) {
            return;
        }

        // 현재 단어가 유효한 경우 카운트를 증가
        count++;

        // 각 자리마다 A, E, I, O, U를 추가하면서 새로운 단어를 생성
        for (let i = 0; i < chars.length; i++) {
            dfs(currentWord + chars[i]);
        }
    }

    // 빈 문자열부터 시작해서 모든 가능한 단어를 생성
    dfs('');

    // 주어진 단어의 순서를 반환
    return result;
}
