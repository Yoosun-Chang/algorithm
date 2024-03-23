#1197_최소 스패닝 트리
# 프림
# 1. 방문하면서 링크 정보를 저장한다.
# 2. 방문한 곳은 다시 연결하지 않는다.

# 크루스칼
# 1. 모든 링크를 한번에 가져온다.
# 2. 링크를 연결하면서 같은 집합으로 만들어준다.
# 3. 만약 이미 같은 집합이라면 연결하지 않는다. 

# 프림
import heapq
n, m = map(int,input().split())
graph = [[] for _ in range(n+1)]
visited = [ 0 for _ in range(n+1)]
for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append([c,b])
    graph[b].append([c,a])

answer = 0
cnt = 0

 #다익스트라
q = [[1,0]]

while q :
    weight,node = heapq.heappop(q)
    if visited[node] == 0:
        visited[node] == 1
        answer += weight
        cnt += 1
        for nxt in graph[node]:
            heapq.heappush(q,nxt)