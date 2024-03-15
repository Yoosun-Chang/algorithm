#1065
def hansu(x):
    x = str(x)
    if len(x) <= 2:
        return True
    else:
        diff = int(x[1]) - int(x[0])
        for i in range(2, len(x)):
            if int(x[i]) - int(x[i - 1]) != diff:
                return False
        return True

n = int(input())
cnt = 0
for x in range(1, n + 1):
    if hansu(x):
        cnt += 1
print(cnt)

