#12865

def recur(idx, w):
    global ans
    if w > m:
        return -9999999
    
    if idx == n:
        return 0
    
    if dp[idx][w] != -1:
        return dp[idx][w]
    
    dp[idx][w] = max(recur(idx+1, w + items[idx][0]) + items[idx][1], recur(idx + 1 , w))

    return dp[idx][w]

n, m = map(int,input().split())
items = [list(map(int,input().split())) for _ in range(n)]

dp = [[-1 for _ in range(100010)] for _ in range(n)]

ans = recur(0,0)
  
print(ans)