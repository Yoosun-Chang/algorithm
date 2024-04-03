#2961
def dfs(depth, cnt, lemon, bad):
    global result

    # 가지 치기
    if cnt != 0:
        if abs(lemon - bad) < result:
            result = abs(lemon - bad)

    # 기저
    if depth == N:
        return

    # 재료를 사용하는 경우
    dfs(depth + 1, cnt + 1, lemon * cuisine[depth][0], bad + cuisine[depth][1])  

    # 재료를 사용하지 않는 경우
    dfs(depth + 1, cnt, lemon, bad)  


N = int(input())
cuisine = [list(map(int, input().split())) for i in range(N)]
result = 1 << 100  # 결과값을 처음에 아주 큰 값으로 초기화

dfs(0, 0, 1, 0)

print(result)
