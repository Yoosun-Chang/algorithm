n,m = map(int,input().split())
points = list(map(int,input().split()))
lines = []
for _ in range(m):
    lines.append(list(map(int, input().split())))
points.sort()
cnt = [0]*n

for line in lines:
    start = 0
    end = n-1
    while start<=end:
        mid = (start+end)//2
        if line[0] <= points[mid] <= line[1]:
            # 중간값의 포인트만이 아닌 나머지의 포인트들도 확인해줘야하는데,
            # start쪽의 포인트부터 확인인지, end쪽의 포인트부터 확인인지...?
            # 구현 못 함. 
            break
        elif points[mid] < line[0]:
            end = mid -1
        elif points[mid] > line[1]:
            start = mid + 1

print(cnt)