# 10828
n = int(input())
order = []
my_stack = []
for _ in range(n):
    order.append(list(input().split()))

def order_fnc(arr):
    if arr[0]=='push':
        my_stack.append(int(arr[1]))
    elif arr[0]=='pop':
        if my_stack:
            print(my_stack[-1])
            my_stack.pop()
        else: print(-1)
    elif arr[0]=='size':
        print(len(my_stack))
    elif arr[0]=='empty':
        if my_stack:
            print(0)
        else: print(1)
    elif arr[0]=='top':
        if my_stack:
            print(my_stack[-1])
        else: print(-1)

for arr in order:
    order_fnc(arr)  