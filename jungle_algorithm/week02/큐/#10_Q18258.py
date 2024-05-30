#18258
import sys
from collections import deque

n = int(sys.stdin.readline())
my_queue = deque([])

for _ in range(n):
    order = sys.stdin.readline().split()

    if order[0] == 'push':
        my_queue.append(int(order[1]))
    elif order[0] == 'front':
        if my_queue:
            print(my_queue[0])
        else:
            print(-1)
    elif order[0] == 'back':
        if my_queue:
            print(my_queue[-1])
        else:
            print(-1)
    elif order[0] == 'empty':
        if my_queue:
            print(0)
        else:
            print(1)
    elif order[0] == 'pop':
        if my_queue:
            print(my_queue.popleft())
        else:
            print(-1)
    elif order[0] == 'size':
        print(len(my_queue))
