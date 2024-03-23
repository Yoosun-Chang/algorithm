#18352_특정 거리의 도시 찾기
from collections import deque
import sys

n, m, k, x = map(int, sys.stdin.readline().split())
graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)

q = deque()
q.append((x, 0))  # 시작 도시와 거리를 함께 큐에 넣음
visited = [False] * (n + 1)
visited[x] = True
result = []

while q:
    node, dist = q.popleft()
    
    if dist == k:  # 거리가 k인 도시를 찾으면 결과에 추가
        result.append(node)
    
    for nxt in graph[node]:
        if not visited[nxt]:
            visited[nxt] = True
            q.append((nxt, dist + 1))

if result:
    result.sort()
    for city in result:
        print(city)
else:
    print(-1)