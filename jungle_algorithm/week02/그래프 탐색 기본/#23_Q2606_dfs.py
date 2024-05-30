# 2606_바이러스_dfs

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
visited = [0 for _ in range(n+1)] # 역주행 방지

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

def recur(node):
    visited[node] = 1
    for nxt in graph[node]:
        if visited[nxt] == 1:
            continue
        recur(nxt)
recur(1)

print(sum(visited)-1)