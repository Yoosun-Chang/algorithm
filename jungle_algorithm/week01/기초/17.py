t = int(input())

for _ in range(t):
    a, b = input().split()
    a = int(a)

    s = ''
    for x in b:
        s += x * a

    print(s)
