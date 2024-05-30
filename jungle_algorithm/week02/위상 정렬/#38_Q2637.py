#2637_장난감 조립
from collections import deque

# 작업의 수와 작업 간의 관계 수 입력 받기
n = int(input())
m = int(input())

# 각 작업 간의 의존 관계를 저장하는 그래프와 각 작업에 필요한 작업의 수 초기화
edges = [[] for _ in range(n + 1)]
need = [0] * (n + 1)

# 결과 값을 저장할 배열 초기화
ans = [0] * (n + 1)

# 마지막 작업은 1가지 방법으로만 만들 수 있으므로 1로 초기화
ans[n] = 1

# 각 작업 간의 의존 관계 입력 받기
for _ in range(m):
    x, y, k = map(int, input().split())
    edges[x].append((y, k))  # 작업 x가 완료되면 작업 y를 수행하여 k개의 제품을 만들 수 있음
    need[y] += 1  # 작업 y를 수행하는 데 필요한 작업의 수 증가

# 위상 정렬을 수행하기 위해 시작 작업으로부터 의존 관계가 없는 작업들을 큐에 넣기
queue = deque([n])

# 시작 작업에서 직접적으로 도달할 수 없는 작업들을 저장
origin = [i for i in range(1, n + 1) if not edges[i]]

# 위상 정렬 수행
while queue:
    cur = queue.popleft()  # 현재 작업 선택
    for nxt, cnt in edges[cur]:  # 현재 작업과 연결된 작업들에 대해
        need[nxt] -= 1  # 해당 작업을 수행할 수 있으므로 필요한 작업의 수 감소
        ans[nxt] += cnt * ans[cur]  # 해당 작업을 수행하는 데 필요한 최소 시간 계산
        if not need[nxt]:  # 모든 필요한 작업이 완료되었으면 큐에 추가
            queue.append(nxt)

# 출력
for i in origin:
    print(i, ans[i])  # 결과 값 출력
