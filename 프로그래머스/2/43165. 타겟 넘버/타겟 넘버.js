function solution(numbers, target) {
    let answer = 0;

    function dfs(index, sum) {
        // 모든 숫자를 사용한 경우
        if (index === numbers.length) {
            // 합계가 target과 일치하면 경우의 수 증가
            if (sum === target) {
                answer++;
            }
            return;
        }

        // 현재 숫자를 더하거나 빼는 두 가지 경우로 탐색
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    // DFS 탐색 시작
    dfs(0, 0);

    return answer;
}
