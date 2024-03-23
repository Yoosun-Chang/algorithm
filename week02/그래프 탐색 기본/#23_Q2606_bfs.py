# 2606_바이러스_bfs
from collections import deque

n = int(input()) # 노드
m = int(input()) # 간선

graph = [[] for _ in range(n+1)]
visited = [0 for _ in range(n+1)] # 역주행 방지

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

q = deque() 

q.append(1)

while len(q) > 0 :
    node = q.popleft() #1
    visited[node]  = 1

    for nxt in graph[node]:
        if visited[nxt] == 1:
            continue
        q.append(nxt)

print(visited)