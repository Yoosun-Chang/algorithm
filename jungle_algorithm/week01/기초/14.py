a = int(input())
b = int(input())
c = int(input())
n = a*b*c
l = [0]*10
while n:
    d = n%10
    n //=10
    l[d] +=1

for x in l:
    print(x)