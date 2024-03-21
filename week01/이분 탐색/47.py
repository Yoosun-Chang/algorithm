#2470
n = int(input())
lst = list(map(int,input().split()))
lst.sort()

left = 0
right = n-1

answer = abs(lst[left]+lst[right])
final = [lst[left], lst[right]]

while left<right:
    left_val = lst[left]
    right_val = lst[right]
    sum = left_val + right_val
    if abs(sum) < answer:
        answer = abs(sum)
        final = [left_val, right_val]
        if answer == 0:
            break
    
    if sum < 0 :
        left += 1
    else:
        right -= 1

print(final[0],final[1])