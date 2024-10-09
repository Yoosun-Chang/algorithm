function solution(distance, rocks, n) {
    // 징검다리를 오름차순으로 정렬
    rocks.sort((a, b) => a - b);
    rocks.push(distance); // 마지막 도착 지점까지 추가
    
    let start = 1;
    let end = distance;
    let answer = 0;
    
    // 이진 탐색 시작
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let prev = 0; // 이전 징검다리 위치
        let removeCount = 0; // 제거한 징검다리 개수

        // 각 징검다리 사이의 거리 계산
        for (let rock of rocks) {
            if (rock - prev < mid) {
                // 현재 징검다리를 제거
                removeCount++;
            } else {
                // 이전 징검다리를 현재 징검다리 위치로 갱신
                prev = rock;
            }
        }

        // 제거한 징검다리 개수가 n 이하이면 mid 거리도 가능한 거리
        if (removeCount <= n) {
            answer = mid; // 가능한 거리로 기록
            start = mid + 1; // 더 큰 거리를 탐색
        } else {
            // 제거한 징검다리 개수가 n보다 크면 더 작은 거리 탐색
            end = mid - 1;
        }
    }

    return answer; // 가장 짧은 거리의 최대값 반환
}

// 예시 실행
console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 출력: 4
