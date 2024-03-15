t = int(input())
for _ in range(t):
    a = input()
    result = 0
    r = 1
    for x in a:
        if x == 'O':
            result+=r
            r+=1
        else:
            r = 1
    print(result)