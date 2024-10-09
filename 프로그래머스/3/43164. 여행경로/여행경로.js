function solution(tickets) {
    const routes = []; // 가능한 경로를 저장할 배열

    // 티켓을 알파벳 순으로 정렬 (사전순으로 경로를 찾기 위해)
    tickets.sort();

    // DFS 함수 정의
    function dfs(current, path, usedTickets) {
        // 모든 티켓을 사용했으면 경로를 저장
        if (usedTickets.length === tickets.length) {
            routes.push([...path]); // 깊은 복사로 저장
            return;
        }

        // 모든 티켓을 순회하면서 경로 탐색
        for (let i = 0; i < tickets.length; i++) {
            const [src, dest] = tickets[i];
            // 현재 티켓이 사용되지 않았고, 출발지가 현재 위치와 같은 경우
            if (!usedTickets.includes(i) && src === current) {
                usedTickets.push(i); // 티켓 사용 표시
                path.push(dest); // 경로에 도착지 추가

                dfs(dest, path, usedTickets); // 다음 경로 탐색

                // 백트래킹 - 티켓과 경로를 되돌림
                usedTickets.pop();
                path.pop();
            }
        }
    }

    // 초기값 설정: ICN에서 출발
    dfs("ICN", ["ICN"], []);

    // 가능한 경로 중 알파벳 순으로 가장 앞선 경로 반환
    return routes[0];
}
