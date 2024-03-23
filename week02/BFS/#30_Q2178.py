#2178_미로 탐색
from collections import deque  # deque 모듈을 가져옵니다. deque는 양쪽 끝에서의 append와 pop이 모두 O(1)에 동작하는 자료구조입니다.

n, m = map(int, input().split())  # 입력으로 주어지는 미로의 세로 크기(n)와 가로 크기(m)를 받습니다.

graph = [list(input().rstrip()) for _ in range(n)]  # 미로의 각 행을 입력받아 2차원 리스트(graph)에 저장합니다.
                                                    # rstrip() 함수를 사용하여 입력된 각 행의 오른쪽에 있는 개행 문자('\n')을 제거합니다.

visited = [[0] * m for _ in range(n)]  # 방문 여부를 나타내는 visited 리스트를 초기화합니다.
dist = [[0] * m for _ in range(n)]  # 최단 거리를 저장하는 dist 리스트를 초기화합니다.
                                    # 이때, visited와 dist 리스트를 2차원 리스트로 생성합니다.
                                    # 각 리스트의 크기는 미로의 세로 크기(n)와 가로 크기(m)로 결정됩니다.

q = deque()  # BFS를 위한 큐를 생성합니다.
q.append((0, 0))  # 시작 지점(0, 0)을 큐에 추가합니다.
visited[0][0] = 1  # 시작 지점은 방문한 것으로 처리합니다.

while q:  # 큐가 빌 때까지 반복문을 실행합니다.
    ey, ex = q.popleft()  # 큐의 왼쪽에서 원소를 하나씩 빼면서 BFS를 수행합니다.
                          # 현재 위치를 ey, ex 변수에 저장합니다.

    for dy, dx in [(0, 1), (0, -1), (1, 0), (-1, 0)]:  # 현재 위치에서 4방향으로 이동하면서 다음 위치를 탐색합니다.
        ny, nx = ey + dy, ex + dx
        if 0 <= ny < n and 0 <= nx < m and graph[ny][nx] == '1' and visited[ny][nx] == 0:  # 이동한 위치가 미로의 범위 내에 있고, 벽이 아니며(값이 '1'), 아직 방문하지 않은 곳이라면 해당 위치를 큐에 추가합니다.
            visited[ny][nx] = 1  # 방문 여부를 표시합니다.
            dist[ny][nx] = dist[ey][ex] + 1  # 최단 거리를 갱신합니다.
            q.append((ny, nx))  # 다음 위치를 큐에 추가합니다.

print(dist[n - 1][m - 1] + 1)  # 최종 도착 지점까지의 최단 거리를 출력합니다.
                               # 시작 지점까지의 거리 1을 더해준 이유는 시작 지점을 포함한 경로의 길이를 나타내기 위함입니다.

