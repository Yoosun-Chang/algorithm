# 2493
import sys
n = int(sys.stdin.readline())
tops = list(map(int, sys.stdin.readline().split()))
result = [0] * n
my_stack = []

for i in range(n):
    while my_stack:
        if my_stack[-1][1] > tops[i]:
            result[i] = my_stack[-1][0] + 1
            break
        else:
            my_stack.pop()
    
    my_stack.append([i, tops[i]])

print(*result)