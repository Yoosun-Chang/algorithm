#3190
n = int(input())  # 보드의 크기
k = int(input())  # 사과의 개수

apples = []
directions = []

for _ in range(k):
    apples.append(list(map(int, input().split())))

l = int(input())  # 방향 변환 횟수

for _ in range(l):
    temp = input().split()
    directions.append([int(temp[0])] + temp[1:])

print(apples)
print(directions)