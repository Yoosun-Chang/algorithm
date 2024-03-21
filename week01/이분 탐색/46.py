#2110
n, c = int(input().split())
house = []
for _ in range(n):
    house.append(int(input()))
house.sort()

start = 1 # 거리 최소 
end = house[-1] - house[0] #거리 최대 
result = 0
cnt = 2

while (start <= end):
    if c == 2:
        print(end)
        break
    mid = (start+end)// 2



