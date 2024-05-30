#2617_구슬 찾기
from collections import deque

n, m = map(int, input().split())
graph_max = [[] for _ in range(n + 1)]
graph_min = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b = map(int, input().split())
    graph_max[a].append(b)
    graph_min[b].append(a)

count = 0

def bfs(graph, start):
    visited = [False] * (n + 1)
    queue = deque([start])
    visited[start] = True
    cnt = 0

    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if not visited[neighbor]:
                queue.append(neighbor)
                visited[neighbor] = True
                cnt += 1

    return cnt

for i in range(1, n + 1):
    if bfs(graph_max, i) > n // 2:
        count += 1
    if bfs(graph_min, i) > n // 2:
        count += 1

print(count)
