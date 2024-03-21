#1920
n = int(input())
n_lst = set(map(int, input().split())) 
m = int(input())
m_lst = list(map(int, input().split()))

for x in m_lst:
    if x in n_lst:
        print(1)
    else:
        print(0)
