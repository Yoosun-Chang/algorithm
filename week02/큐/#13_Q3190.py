#3190
import sys

input = sys.stdin.readline

from collections import deque

# 입력값 받기
N = int(input())  # 보드의 크기
K = int(input())  # 사과의 개수

# 보드를 나타내는 배열 초기화
arr = [[0] * N for _ in range(N)]

# 사과가 있는 곳을 1로 표시
for _ in range(K):
    x, y = map(int, input().split())
    arr[x - 1][y - 1] = 1

# 방향 전환 정보 입력받기
L = int(input())  # 방향 전환 정보 개수
time_dic = {}
for i in range(L):
    X, C = input().split()
    time_dic[int(X)] = C

# 우하좌상 방향을 나타내는 배열
dx = [0, 1, 0, -1]  # 행
dy = [1, 0, -1, 0]  # 열

# 초기 뱀의 위치와 방향 설정
x, y, d = 0, 0, 0

# 뱀의 몸통을 나타내는 deque
snake = deque([])
time = 0

# 게임 루프 시작
while True:
    # 현재 위치를 뱀의 몸통에 추가
    snake.append((x, y))
    time += 1

    # 머리를 이동시킴
    x += dx[d]
    y += dy[d]

    # 벽에 부딪히거나 자기 몸과 부딪히면 게임 종료
    if x < 0 or x >= N or y < 0 or y >= N or arr[x][y] == 2:
        break

    # 머리가 이동한 자리에 사과가 없으면 꼬리를 줄임
    if not arr[x][y]:
        i, j = snake.popleft()
        arr[i][j] = 0

    # 머리를 이동한 자리에 뱀의 몸통을 표시
    arr[x][y] = 2

    # 방향 전환 시간이면 방향 전환
    if time in time_dic:
        if time_dic[time] == 'D':  # 시계 방향으로 돌기
            d = (d + 1) % 4
        else:  # 반시계 방향으로 돌기
            d = (d - 1) % 4

# 게임이 종료되면 걸린 시간 출력
print(time)