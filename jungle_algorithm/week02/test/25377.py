#25377_빵
n = int(input())
lst = []
for _ in range(n):
    n = list(map(int,input().split()))
    lst.append(n)

result = []

for n in lst:
    if n[0]<=n[1]:
        result.append(n[1])
    else:
        continue

if result:
    print(min(result))
else: print(-1)