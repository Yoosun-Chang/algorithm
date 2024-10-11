function solution(n, wires) {
    // 그래프를 인접 리스트로 표현하기 위한 배열 초기화
    const graph = Array.from({ length: n + 1 }, () => []);

    // 주어진 연결 정보를 이용해 그래프를 구성
    wires.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    // 두 전력망의 노드 수 차이를 최소화하는 변수를 초기화
    let minDifference = Infinity;

    // 특정 연결을 끊었을 때의 노드 수를 계산하는 함수 (BFS 사용)
    function countNodes(start, banned) {
        const visited = new Array(n + 1).fill(false);
        const queue = [start];
        visited[start] = true;
        let count = 1;

        while (queue.length > 0) {
            const node = queue.shift();

            // 현재 노드와 연결된 노드들 중, 방문하지 않았고 끊어진 연결이 아닌 노드들을 탐색
            for (const next of graph[node]) {
                if (!visited[next] && next !== banned) {
                    visited[next] = true;
                    queue.push(next);
                    count++;
                }
            }
        }

        return count; // 연결된 노드의 개수 반환
    }

    // 각 연결을 하나씩 끊어보면서 두 전력망의 노드 수 차이를 계산
    wires.forEach(([a, b]) => {
        // 연결을 끊었을 때의 두 전력망의 노드 개수 계산
        const nodesInOnePart = countNodes(a, b);
        const nodesInOtherPart = n - nodesInOnePart;
        const difference = Math.abs(nodesInOnePart - nodesInOtherPart);

        // 두 전력망의 노드 수 차이의 최소값을 갱신
        minDifference = Math.min(minDifference, difference);
    });

    // 최소 노드 수 차이를 반환
    return minDifference;
}