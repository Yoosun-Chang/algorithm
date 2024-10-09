function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    // 상하좌우 이동을 위한 방향 벡터
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    // 방문 여부 및 BFS 큐 초기화
    const queue = [[0, 0, 1]]; // [x, y, distance]
    const visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(new Array(m).fill(false));
    }

    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        // 상대 팀 진영에 도착한 경우 최단 거리 반환
        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        // 상하좌우로 이동
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 맵의 범위를 벗어나지 않고, 이동할 수 있는 칸(1)이며, 방문하지 않은 경우
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true; // 방문 처리
                queue.push([nx, ny, dist + 1]); // 다음 이동을 큐에 추가
            }
        }
    }

    // 모든 경로를 탐색했으나 상대 팀 진영에 도달할 수 없는 경우
    return -1;
}
