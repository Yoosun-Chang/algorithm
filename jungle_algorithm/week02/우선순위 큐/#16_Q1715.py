#1715_카드 정렬하기
import heapq
import sys

n = int(sys.stdin.readline())
heap = []
for _ in range(n):
    num = int(sys.stdin.readline())
    heapq.heappush(heap,num)

result = 0

while len(heap)>1:
    a = heapq.heappop(heap)
    b = heapq.heappop(heap)
    temp = a+b
    heapq.heappush(heap,temp)
    result+=temp

print(result)