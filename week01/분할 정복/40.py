#2630
import sys
read = sys.stdin.readline
N = int(read())
lst = [list(map(int, read().split())) for _ in range(N)]

result = []
# 좌표값을 놓고 for loop을 돌려서 푼다.
def divide(x, y, N):
  color = lst[x][y]
  for i in range(x, x+N):
    for j in range(y, y+N):
      if color != lst[i][j]:
        divide(x, y+N//2, N//2)
        divide(x+N//2, y, N//2)
        divide(x+N//2, y+N//2, N//2)
        divide(x, y, N//2)
        return
  if color == 0:
    result.append(0)
  else:
    result.append(1)


divide(0,0,N)
print(result.count(0))
print(result.count(1))