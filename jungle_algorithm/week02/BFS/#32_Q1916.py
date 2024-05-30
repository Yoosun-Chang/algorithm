#1916_최소비용 구하기
import sys, heapq
n = int(sys.stdin.readline())
m = int(sys.stdin.readline())

links = [[] for _ in range(n+1)]
dist = [ 1e9 for _ in range(n+1) ]

for _ in range(m):
    A,B,C = map(int,sys.stdin.readline().split())
    links[A].append([B,C])

start, end = map(int,sys.stdin.readline().split())
dist[start] = 0
q = []
heapq.heappush(q,[dist[start],start])

while q:
    _w,node = heapq.heappop(q)
    if dist[node] < _w:
        continue
    for nxt, weight in links[node]:
        if dist[node] + weight < dist[nxt]:
            dist[nxt] = dist[node] + weight
            heapq.heappush(q,[dist[nxt],nxt])

         
print(dist[end])