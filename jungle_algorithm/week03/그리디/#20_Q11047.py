#11047_동전 0

n,k = map(int,input().split())
coins = []
for _ in range(n):
    coin = int(input())
    coins.append(coin)

cnt = 0
while k != 0:
    coin = coins[-1]
    if k >= coin:
        cnt += k//coin
        k = k%coin
        coins.pop(-1)
    else:
        coins.pop(-1)
print(cnt)
