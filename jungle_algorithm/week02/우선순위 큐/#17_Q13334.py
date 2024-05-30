import heapq
import sys

n = int(sys.stdin.readline())
pos = []
for _ in range(n):
    h, o = map(int, sys.stdin.readline().split())
    pos.append([min(h, o), max(h, o)])
dist = int(input())
pos.sort(key=lambda x: (x[1], x[0]))

# 최소 힙
heap = []
max_count = 0
print(pos)
for p in pos:
    start, end = p
    heapq.heappush(heap, start)
    if heap and heap[0] < end - dist:
        heapq.heappop(heap)
    max_count = max(max_count, len(heap))

print(max_count)