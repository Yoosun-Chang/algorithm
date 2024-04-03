#2293_동전 1
N, K = map(int, input().split())
lst = [int(input()) for _ in range(N)]

dp = [0]*(K+1)
dp[0] = 1

for coin in lst:
    for j in range(coin, K+1):
        dp[j] += dp[j-coin]

print(dp[K])