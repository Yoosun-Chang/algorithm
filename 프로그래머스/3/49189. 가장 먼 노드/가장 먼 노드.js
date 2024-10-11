function solution(n, edge) {
    // 그래프 초기화 (1번 노드부터 n번 노드까지)
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 간선 정보로 그래프 구성
    for (const [u, v] of edge) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // BFS를 위한 큐와 거리 배열 초기화
    const queue = [1];
    const distance = Array(n + 1).fill(-1);
    distance[1] = 0; // 시작 노드의 거리는 0

    // BFS 실행
    while (queue.length > 0) {
        const current = queue.shift();

        // 현재 노드와 연결된 모든 노드 탐색
        for (const next of graph[current]) {
            // 방문하지 않은 노드만 처리
            if (distance[next] === -1) {
                distance[next] = distance[current] + 1;
                queue.push(next);
            }
        }
    }

    // 최대 거리 계산
    const maxDistance = Math.max(...distance);
    
    // 최대 거리와 같은 거리를 가진 노드의 개수 계산
    return distance.filter(d => d === maxDistance).length;
}

// 테스트 예제
const n = 6;
const edge = [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2]
];
console.log(solution(n, edge)); // 출력: 3
