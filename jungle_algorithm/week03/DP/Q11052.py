#11052_카드 구매하기
N = int(input())
lst = [0]+list(map(int, input().split()))

# dp테이블 생성 및 초기화
dp = [0]*(N+1)

for i in range(1, N+1):     # p1~pN까지 처리
    for j in range(1, N+1): # 카드1장~ 카드N장 까지 추가해가면서 처리
        if j-i>=0:          # dp[] 범위내
            dp[j]=max(dp[j], dp[j-i]+lst[i])
print(dp[N])