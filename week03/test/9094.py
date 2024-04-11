#9094_수학적 호기심
import sys
n = int(sys.stdin.readline())
for _ in range(n):
    n, m = map(int,sys.stdin.readline().split())
    ans = 0
    for a in range(1, n-1):
        for b in range(a+1, n):
            if (a**2 + b**2 +m)%(a*b) == 0:
                ans += 1
    print(ans)