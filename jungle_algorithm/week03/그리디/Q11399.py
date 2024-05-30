#11399_ATM
n = int(input())
time = list(map(int,input().split()))
time.sort()

sum = 0

for i in range(0,n+1):
    for j in range(0,i):
        sum += time[j]

print(sum)
