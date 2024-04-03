#14501
     
n = int(input())
c = [list(map(int,input().split())) for _ in range(n)]


dp = [0 for _ in range(n+1)]

for idx in range(n)[::-1]:
    if idx+c[idx][0]>n:
        dp[idx] = dp[idx+1]
    else: 
        dp[idx] = max(dp[(idx+c[idx][0])] + c[idx][1], dp[(idx+1)])
print(dp[0])