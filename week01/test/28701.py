n = int(input())
sum = 0
sum1 = 0
sum3 = 0
for i in range(1, n+1):
    sum += i

sum2 = sum**2

for i in range(1,n+1):
    sum3 += i**3

print(sum, sum2, sum3, sep='\n')
