#5639_이진 검색 트리
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 9)

arr = []

# 엔터 들어올 때까지 입력
while True:
    try:
        x = int(input())
        arr.append(x)
    except: 
        break

def solution(A):
    if len(A) == 0:
        return
    tempL, tempR = [], []
    mid = A[0] # 첫번째 값을 루트 노드로 설정
    for i in range(1,len(A)):
        if A[i] > mid:
            tempL = A[1:i]
            tempR = A[i:]
            break
    else:
        tempL = A[1:]
    solution(tempL)
    solution(tempR)
    print(mid)

solution(arr)