# 17608
import sys
n = int(sys.stdin.readline())
bars = []

for i in range(n):
    bar = int(sys.stdin.readline())
    while bars and bars[-1] <= bar:
        bars.pop()
    bars.append(bar)

print(len(bars))
