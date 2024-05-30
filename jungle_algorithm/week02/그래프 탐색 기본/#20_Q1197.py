#1197_최소 스패닝 트리
# 프림
# 1. 방문하면서 링크 정보를 저장한다.
# 2. 방문한 곳은 다시 연결하지 않는다.

# 크루스칼
# 1. 모든 링크를 한번에 가져온다.
# 2. 링크를 연결하면서 같은 집합으로 만들어준다.
# 3. 만약 이미 같은 집합이라면 연결하지 않는다. 

# 프림
import heapq, sys
N, M = map(int,sys.stdin.readline().split())

graph = [[] for _ in range(N+1)] #노드의 개수 + 1
visited = [ 0 for _ in range(N+1)]

# 1번부터 3번까지 노드가 주어지니

# 0 1 2 3 


for _ in range(M):
    A,B,C = map(int,sys.stdin.readline().split())

    graph[A].append([C,B])
    graph[B].append([C,A])

# 다익스트라!

answer = 0
cnt = 0

q = [[0,1]]


while q: # q가 아무것도 없어질 때까지!

    if cnt == N:
        break

    weight,node = heapq.heappop(q) # 최소비용

    # 방문처리!

    if visited[node] == 0:
        visited[node] = 1
        answer += weight
        cnt += 1

        for nxt in graph[node]:
            heapq.heappush(q,nxt) # 담아주기

print(answer)
