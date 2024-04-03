#2565
n = int(input())
arr_1 = []
for _ in range(n):
    a,b = map(int,input().split())
    arr_1.append((a,b))
arr_1.sort(key = lambda x:x[0])

arr = []
for a,b in arr_1:
    arr.append(b)
dp = [1 for _ in range(n)]

for i in range(n):
    for j in range(i):
        if arr[i] > arr[j]:
            dp[i] = max(dp[i], dp[j] + 1)
            
print(n-max(dp))