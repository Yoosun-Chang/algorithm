#1931_회의실 배정
n = int(input())
rev = []
for _ in range(n):
    start, end = map(int, input().split())
    rev.append([start, end])

# 끝나는 시간을 기준으로 오름차순으로 정렬
rev = sorted(rev, key=lambda x: (x[1], x[0]))

# 가장 빨리 끝나는 회의 선택
result = [rev[0]]
for time in rev[1:]:
    s, e = result[-1]
    _s, _e = time
    if _s >= e:
        result.append(time)

print(len(result))
