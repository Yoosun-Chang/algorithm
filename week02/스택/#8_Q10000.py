#10000
import sys
n = int(sys.stdin.readline())
circles = []
for _ in range(n):
    circles.append(list(map(int,sys.stdin.readline().split())))

result = []
for circle in circles:
    L = circle[0] + circle[1]
    R = circle[0] - circle[1]
    if L not in result:
        result.append(L)
    if R not in result:
        result.append(R)

print(len(result))