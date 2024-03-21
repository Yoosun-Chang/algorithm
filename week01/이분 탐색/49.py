# m : 사대의 수 / n : 동물의 수 / l : 사정거리
m, n, l = map(int, input().split())
m_x = list(map(int, input().split())) # 사대의 위치
m_x.sort() # 사대의 위치 정렬
animals = [] # 동물의 위치 리스트 
for _ in range(n):
    animals.append(list(map(int, input().split())))

cnt = 0 # 잡을 수 있는 동물의 수 0으로 초기화

for animal in animals: # 첫번째 동물부터~
    start = 0 # 사대 첫번쨰
    end = m - 1 # 사대 마지막
    while start <= end: # 이분 탐색 조건
        mid = (start + end) // 2 # 
        distance = abs(m_x[mid] - animal[0]) + animal[1] # 거리 조건
        if distance <= l: # 거리안에 들어온다면
            cnt += 1 # 잡을 수 있는 동물의 수에 추가
            break # 종료

        elif m_x[mid] < animal[0]: # 동물의 x가 사대위치 x보다 크다면
            start = mid + 1 # 사대 오른쪽으로 이동
        else: # 동물의 x가 사대위치 x보다 작다면
            end = mid - 1 # 사대 왼쪽으로 이동

print(cnt)