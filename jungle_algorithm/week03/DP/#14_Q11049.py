#11049_행렬 곱셈 순서
import sys
n = int(sys.stdin.readline())
R = []
C = []
dp = [[-1] * n for _ in range(n)]

for i in range(n):
    a, b = map(int, sys.stdin.readline().split())
    R.append(a)
    C.append(b)
    
for i in range(n):
    dp[i][i] = 0

def func(x, y):
    if dp[x][y] != -1:
        return dp[x][y]
    
    mn = float('inf')
    for k in range(x, y):
        cost = func(x, k) + func(k + 1, y) + R[x] * C[k] * C[y]
        mn = min(mn, cost)
    
    dp[x][y] = mn
    return mn

print(func(0, n - 1))
