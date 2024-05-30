#9084_동전
import sys
T = int(sys.stdin.readline())  # Testcase 수

for _ in range(T):
    n = int(sys.stdin.readline())  # 동전의 가지 수
    coins = list(map(int,sys.stdin.readline().split()))
    m = int(sys.stdin.readline())

    dp = [0] * (m + 1)  # DP 배열 초기화
    dp[0] = 1  # 0원을 만들 수 있는 경우의 수는 1가지 (아무 것도 선택하지 않는 경우)

    for coin in coins:
        for i in range(1, m+1):
            if i >= coin:
                dp[i] += dp[i-coin]

    print(dp[m])  # 지폐를 동전으로 바꾸는 경우의 수 출력