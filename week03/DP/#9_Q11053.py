#11053_가장 긴 증가하는 부분 수열 
n = int(input())
numbers = list(map(int, input().split()))

# dp[i]는 numbers[i]를 마지막으로 하는 가장 긴 증가하는 부분 수열의 길이
dp = [1] * n

for i in range(1, n):
    for j in range(i):
        if numbers[i] > numbers[j]:
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))
