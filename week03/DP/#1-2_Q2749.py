#2749_피보나치 수 3
# 피사노주기 이론 확인~

n = int(input()) % (15 * 10**5)

dp=[0 for _ in range(n+1)]
dp[1] = 1

for i in range(2,n+1):
    dp[i] = (dp[i-1] + dp[i-2])%1000000

print(dp[n])
