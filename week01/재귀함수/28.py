#1914
def hanoi(n, start, temp, end):
    if n == 1:
        print(start, end, sep=" ")
        return
    
    hanoi(n-1, start, end, temp)
    hanoi(1,start,temp,end)
    hanoi(n-1, temp, start, end)

n = int(input())
k = 2**n - 1
print(k)
if n <= 20:
    hanoi(n, 1, 2, 3)
