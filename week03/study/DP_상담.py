#14501
def recur(idx):

    if idx == n:
        return 0
    if idx > n:
        return -999999999
    
    if dp[idx] != -1:
        return dp[idx]
    
    # 상담 하거나, 안하거나 그중에서 더 많은 돈을 받는 경우
    dp[idx] = max(recur(idx+c[idx][0]) + c[idx][1], recur(idx+1))

    return dp[idx]
     
n = int(input())
c = [list(map(int,input().split())) for _ in range(n)]

dp = [-1 for _ in range(n+1)]

recur(0)

print(dp[0])