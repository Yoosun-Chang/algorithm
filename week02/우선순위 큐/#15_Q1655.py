import heapq, sys

N = int(input())
max_heap, min_heap = [], []
for _ in range(N):
    num = int(sys.stdin.readline())
    if len(max_heap) == len(min_heap):
        heapq.heappush(max_heap, -num)
    else:
        heapq.heappush(min_heap, num)
    if min_heap and min_heap[0] < -max_heap[0]:
        min_value = heapq.heappop(min_heap)
        max_value = heapq.heappop(max_heap)
        heapq.heappush(min_heap, -max_value)
        heapq.heappush(max_heap, -min_value)

    print(-max_heap[0])
