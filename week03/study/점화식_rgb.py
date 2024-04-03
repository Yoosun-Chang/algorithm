#1149
n = int(input())

dp = [[0] * 3 for _ in range(n)]
cost = [list(map(int, input().split())) for _ in range(n)]

# 초기값 설정
dp[0] = cost[0]

# 바텀업 DP 진행
for i in range(1, n):
    dp[i][0] = min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0]
    dp[i][1] = min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1]
    dp[i][2] = min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2]

# 최종적으로 빨간색, 초록색, 파란색 중 가장 작은 값이 최종 답
print(min(dp[n - 1]))
