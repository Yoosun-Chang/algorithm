#12865

def recur(idx, w, v):
    global answer
    if w > b :
        return
    if idx == n:
        answer = max(answer, v)
        return

    # 물건을 넣은 경우
    recur(idx+1, w+items[idx][0], v + items[idx][1])

    #물건을 안넣은 경우
    recur(idx+1, w, v)

n, b = map(int,input().split())

items = [list(map(int, input().split())) for _ in range(n)]

answer = 0
recur(0,0,0)
print(answer)