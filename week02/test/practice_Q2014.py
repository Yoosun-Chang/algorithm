#2014_소수의 곱
import heapq
import sys

K, N = map(int, sys.stdin.readline().split())
nums = list(map(int, sys.stdin.readline().split()))

heap = []
for num in nums:
    heapq.heappush(heap, num) 

for _ in range(N):
    min_val = heapq.heappop(heap) 
    for num in nums:
        new_val = min_val * num
        heapq.heappush(heap, new_val) 
        if min_val % num == 0:
            break
print(min_val)
