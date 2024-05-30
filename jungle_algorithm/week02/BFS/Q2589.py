# 2589_보물섬
from collections import deque

n, m = map(int,input().split())
graph = [list(input().rstrip()) for _ in range(n)]

maxi = 0 
for y in range(n):
    for x in range(m):
        if graph[y][x] == 'L':
            # 방문 초기화
            visited = [[0 for _ in range(m)] for _ in range(n)]
            dist = [[0 for _ in range(m)] for _ in range(n)]
            
            # BFS
            q = deque()
            q.append((y,x))
            visited[y][x] = 1

            while q :
                ey, ex = q.popleft()
                # 4 방향 탐색
                for dy, dx in [(0,1), (0,-1), (1,0), (-1,0)]:
                    ny, nx = ey + dy, ex + dx
                    if 0 <= ny < n and 0 <= nx < m and graph[ny][nx] == 'L' and visited[ny][nx] == 0:
                        visited[ny][nx] = 1
                        dist[ny][nx] = max(dist[ey][ex] + 1, dist[ny][nx])
                        if maxi < dist[ny][nx]:
                            maxi = dist[ny][nx]
                        q.append((ny,nx))

print(maxi)

# 이동은 상하좌우
# 육지만 이동 가능
# 육지 L 바다 W
# 보물은 가장 긴 시간이 걸리는 육지 두곳에 나뉘어 묻혀있다.
# 모든 L 에서 BFS로 거리를 계산하기
# 가장 거리가 먼곳 -> 정답


