#2193_이친수
import sys
sys.stdin = open("input.txt", "r")

N = int(input())

# dp테이블 생성 및 초기값 설정
dp = [[0]*2 for _ in range(N+1)]
dp[1] = [0,1]

for i in range(2, N+1):
    dp[i][0] = sum(dp[i-1]) # 0은 0, 1뒤에 붙여도 이친수임..
    dp[i][1] = dp[i-1][0]   # 1은 0 뒤에만 붙일 수 있음
print(sum(dp[N]))