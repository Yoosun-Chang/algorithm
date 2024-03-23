#10000
import sys

n = int(sys.stdin.readline())
circles = []

for _ in range(n):
    x, r = map(int, input().split())
    start = x - r
    radi = 2 * r
    circles.append((start, radi))

circles.sort()


print(circles)
