function solution(k, dungeons) {
    let maxCount = 0; // 최대 탐험할 수 있는 던전 수를 저장하는 변수

    // 모든 가능한 순열을 생성하여 던전 탐험을 시도하는 함수
    function exploreDungeons(k, count, visited) {
        // 최대 탐험 수를 업데이트합니다.
        maxCount = Math.max(maxCount, count);

        // 각 던전을 순회하면서 탐험할 수 있는지 확인합니다.
        for (let i = 0; i < dungeons.length; i++) {
            // 이미 방문한 던전은 건너뜁니다.
            if (visited[i]) continue;

            // 현재 던전의 최소 필요 피로도와 소모 피로도
            const [minFatigue, consumeFatigue] = dungeons[i];

            // 남은 피로도가 던전의 최소 필요 피로도보다 크거나 같을 때만 탐험 가능
            if (k >= minFatigue) {
                // 현재 던전을 방문했다고 표시
                visited[i] = true;
                // 재귀 호출을 통해 다음 던전을 탐험
                exploreDungeons(k - consumeFatigue, count + 1, visited);
                // 탐험이 끝나면 방문 표시를 원래대로 되돌림
                visited[i] = false;
            }
        }
    }

    // 탐험 여부를 추적하는 배열을 초기화하고 탐험 시작
    exploreDungeons(k, 0, Array(dungeons.length).fill(false));

    // 최대 탐험할 수 있는 던전 수 반환
    return maxCount;
}
