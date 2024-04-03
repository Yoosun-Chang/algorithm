#5585_거스름돈
n = 1000 - int(input())
result = 0
coin = [500,100,50,10,5,1]
for c in coin:
    result += n //c
    n %= c
print(result)