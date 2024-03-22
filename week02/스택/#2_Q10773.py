# 10773
k = int(input())
my_stack = []
for _ in range(k):
    n = int(input())
    if n == 0:
        my_stack.pop()
    else:
        my_stack.append(n)

total_sum = sum(my_stack)
print(total_sum)