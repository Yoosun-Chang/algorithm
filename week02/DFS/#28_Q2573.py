import sys
from collections import deque

### 너무 크면 메모리를 잡아먹는다!!!
sys.setrecursionlimit(10000)

n, m = map(int, sys.stdin.readline().split())

graph = []

for _ in range(n):
    m_list = list(map(int, sys.stdin.readline().split()))
    graph.append(m_list)


def count_sea(graph, x, y):
    cnt = 0
    for dx, dy in [[-1, 0], [0, 1], [1, 0], [0, -1]]:  # 북 동 남 서
        nx, ny = x + dx, y + dy
        if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 0:
            cnt += 1
    return cnt


def melt(graph):
    melted_graph = [row[:] for row in graph]
    for i in range(n):
        for j in range(m):
            if graph[i][j] != 0:
                sea_count = count_sea(graph, i, j)
                melted_graph[i][j] = max(graph[i][j] - sea_count, 0)
    return melted_graph


def bfs(x, y, visited):
    queue = deque([(x, y)])
    visited[x][y] = True
    while queue:
        x, y = queue.popleft()
        for dx, dy in [[-1, 0], [0, 1], [1, 0], [0, -1]]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] != 0 and not visited[nx][ny]:
                queue.append((nx, ny))
                visited[nx][ny] = True


def is_separated():
    visited = [[False] * m for _ in range(n)]
    count = 0
    for i in range(n):
        for j in range(m):
            if graph[i][j] != 0 and not visited[i][j]:
                bfs(i, j, visited)
                count += 1
                if count >= 2:
                    return True
    return False


ice_cnt = sum(row.count(0) for row in graph)

years = 0

while True:
    graph = melt(graph)
    years += 1
    if sum(row.count(0) for row in graph) == n * m:  # 빙산이 다 녹았을 경우
        print(0)
        break

    if is_separated():  # 빙산이 두 개 이상으로 분리되었을 경우
        print(years)
        break
