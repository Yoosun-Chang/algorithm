#1655
import sys, heapq
n = int(sys.stdin.readline())
heap = []
for _ in range(n):
    num = int(sys.stdin.readline())
    heapq.heappush(heap,num)

for i in range(1,8):
    while len(heap) != n - i:
        heapq.heappop(heap)
print(heap[-1])
