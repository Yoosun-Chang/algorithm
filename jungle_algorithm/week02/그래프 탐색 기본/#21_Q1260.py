#1260_DFS와 BFS
from collections import deque

n, m, v = map(int, input().split())  # 정점의 개수, 간선의 개수, 시작 정점

graph = [[] for _ in range(n + 1)]
visited = [0] * (n + 1)  # 방문한 노드 체크를 위한 리스트
visited2 = [0] * (n + 1)  # 역주행 방지를 위한 리스트

# 그래프 정보 입력
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for lst in graph:
    lst.sort()
    
# DFS 수행
def dfs(node):
    visited[node] = 1
    print(node, end=" ")
    for nxt in graph[node]:
        if visited[nxt] == 0:
            dfs(nxt)

# BFS 수행
def bfs(node):
    q = deque()
    q.append(node)

    while q:
        node = q.popleft()
        visited2[node] = 1
        print(node, end=" ")
        for nxt in graph[node]:
            if visited2[nxt] == 0:
                visited2[nxt] = 1
                q.append(nxt)
dfs(v)
print()
bfs(v)
