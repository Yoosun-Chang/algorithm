function solution(N, road, K) {
    const INF = Infinity;
    // 최단 거리 배열 초기화
    const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));

    // 자기 자신으로 가는 거리는 0으로 설정
    for (let i = 1; i <= N; i++) {
        dist[i][i] = 0;
    }

    // 도로 정보로 거리 초기화 (양방향)
    for (const [a, b, c] of road) {
        dist[a][b] = Math.min(dist[a][b], c); // 이미 더 짧은 길이 있으면 그걸 사용
        dist[b][a] = Math.min(dist[b][a], c);
    }

    // 플로이드-와샬 알고리즘 실행
    for (let k = 1; k <= N; k++) {
        for (let i = 1; i <= N; i++) {
            for (let j = 1; j <= N; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }

    // 1번 마을에서 K 이하의 거리인 마을 수 계산
    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (dist[1][i] <= K) {
            count++;
        }
    }

    return count;
}

