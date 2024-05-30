#14501
def recur(idx, price):
    global answer
    if idx == n:
        answer = max(answer, price)
        return
    if idx > n:
        return
    
    # 상담 한다면
    recur(idx+c[idx][0], price + c[idx][1])

    # 상담 안한다면
    recur(idx+1, price)
     
n = int(input())
c = [list(map(int,input().split())) for _ in range(n)]

answer = 0

recur(0,0)

print(answer)