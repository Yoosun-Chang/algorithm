#2624_동전 바꿔주기
import sys
T = int(sys.stdin.readline())  # 지폐의 금액
k = int(sys.stdin.readline())  # 동전의 가지 수

coins = []  # 동전 정보를 저장할 리스트
for _ in range(k):
    p, n = map(int, sys.stdin.readline().split())  # 동전의 금액 p와 개수 n 입력
    coins.append((p, n))

dp = [0] * (T + 1)  # DP 배열 초기화
dp[0] = 1  # 0원을 만들 수 있는 경우의 수는 1가지 (아무 것도 선택하지 않는 경우)

for p, n in coins:  # 각 동전에 대해서
    for j in range(T, -1, -1):  # 현재 금액부터 역순으로 DP 업데이트
        for k in range(1, n + 1):  # 해당 동전을 1개부터 n개까지 사용하여
            if j - (p * k) >= 0:  # 만들고자 하는 금액을 초과하지 않으면
                dp[j] += dp[j - (p * k)]  # DP 업데이트

print(dp[T])  # 지폐를 동전으로 바꾸는 경우의 수 출력
