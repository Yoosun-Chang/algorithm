#6549

while True:
    n = int(input())  # 직사각형의 수
    if n == 0:  # 입력의 마지막 줄에 0이 주어지면 종료
        break
    
    heights = list(map(int, input().split()))  # 직사각형의 높이 리스트


