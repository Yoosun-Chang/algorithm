
n, b = map(int, input().split())
items = [list(map(int, input().split())) for _ in range(n)]

dp = [[0] * (b + 1) for _ in range(n + 1)]

for idx in range(1, n + 1):
    for w in range(1, b + 1):
        weight, value = items[idx - 1]
        if w < weight:  # 현재 물건을 넣을 수 없는 경우
            dp[idx][w] = dp[idx - 1][w]
        else:  # 현재 물건을 넣을 수 있는 경우
            dp[idx][w] = max(dp[idx - 1][w], dp[idx - 1][w - weight] + value)

print(dp[n][b])
