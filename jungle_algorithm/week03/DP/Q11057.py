#11057_오르막 수
# [1] dp[] 2차원으로 설계, 초기화 (숫자 뒤에 붙이기)
N = int(input())

dp = [[0]*10 for _ in range(N+1)]
dp[1] = [1]*10

for i in range(2, N+1):
    for j in range(10):
        dp[i][j] = sum(dp[i-1][j:])

ans = sum(dp[N])
print(ans%10007)

# [2] dp[] 1차원으로 풀이 (숫자 뒤에 붙이기
N = int(input())

# dp[] 1차원으로 설계, 초기화
dp = [1]*10

for i in range(2, N+1):     # N-1번 처리
    for j in range(10):
        dp[j] = sum(dp[j:])

ans = sum(dp)
print(ans%10007)

# [3] dp[] 1차원, 숫자 앞에 붙이기
N = int(input())

# dp[] 1차원으로 설계, 초기화
dp = [1]*10

for _ in range(N-1):     # N-1번 처리
    for j in range(1, 10):
        dp[j] += dp[j-1]

ans = sum(dp)
print(ans%10007)
