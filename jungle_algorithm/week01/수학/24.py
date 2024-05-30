#2628
x,y = map(int,input().split())
x_lst = [0, x]
y_lst = [0, y]
n = int(input())
for _ in range(n):
    c,r = map(int,input().split())
    if c == 0:
        y_lst.append(r)
    else: 
        x_lst.append(r)    

x_lst.sort()
y_lst.sort()

x_max = 0
for i in range(1,len(x_lst)):
    x_max = max(x_max, x_lst[i]-x_lst[i-1])

y_max = 0
for i in range(1,len(y_lst)):
    y_max = max(y_max, y_lst[i]-y_lst[i-1])

print(x_max * y_max)