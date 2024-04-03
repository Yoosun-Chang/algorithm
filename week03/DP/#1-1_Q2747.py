#2747_피보나치 수
#10826_피보나치 수 4
#10870_피보나치 수 5
import sys
n = int(sys.stdin.readline())

dp=[0 for _ in range(10001)]
dp[0] = 1

for i in range(1,n):
    dp[i] = dp[i-1] + dp[i-2]

print(dp[n-1])