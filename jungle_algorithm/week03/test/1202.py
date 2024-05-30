#1202_보석 도둑

# 보석 N개, 각 보석은 무게 M와 가격 V
# 가방 K개, 각 가방에 담을 수 있는 최대 무게는 C이다. 
# 가방에는 최대 한 개의 보석만

import sys
import heapq

input = sys.stdin.readline

N, K = map(int, input().split())
jewels = []
bags = []
length = N
answer = 0

jewels = [tuple(map(int, input().split())) for _ in range(N)]
jewels.sort(key = lambda x : x[0], reverse = True)

bags = [int(input()) for _ in range(K)]
bags.sort(reverse = True)

hq = []

while bags:
    bag = bags.pop()
    while jewels:
        weight, value = jewels.pop()
        if bag >= weight:
            heapq.heappush(hq, -value)
        else:
            jewels.append((weight, value))
            break
    if hq:
        answer -= heapq.heappop(hq)
print(answer)