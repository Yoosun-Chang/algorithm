#1912_연속합
N = int(input())
lst = [0]+list(map(int, input().split()))

# dp테이블 생성 및 초기값 설정
dp = [0]*(N+1)

if max(lst[1:])<0:      # 모두 음수인 경우
    ans = max(lst[1:])  # 1개만 더한 값이 max
else:
    for i in range(1, N+1):
        dp[i]=max(0, dp[i-1]+lst[i])
    ans = max(dp[1:])
print(ans)