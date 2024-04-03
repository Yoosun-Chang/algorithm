#2225_합분해
N, K = map(int, input().split())

dp = [1]*(N+1)
for i in range(2, K+1):     # 반복 회수
    for j in range(1, N+1):
        dp[j] += dp[j-1]

ans = dp[N]
print(ans%1000000000)