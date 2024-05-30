#9252_LCS 2
def find_lcs(a, b, dp):
    lcs = []
    i, j = len(a), len(b)
    
    while i > 0 and j > 0:
        if a[i - 1] == b[j - 1]:
            lcs.append(a[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -= 1
        else:
            j -= 1
    
    return ''.join(reversed(lcs))

a = input()
b = input()

dp = [[0 for _ in range(len(b) + 1)] for _ in range(len(a) + 1)]

for i in range(1, len(a) + 1):
    for j in range(1, len(b) + 1):
        if a[i - 1] == b[j - 1]:
            dp[i][j] = dp[i - 1][j - 1] + 1
        else:
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

lcs_length = dp[-1][-1]
if lcs_length != 0:
    lcs_string = find_lcs(a, b, dp)
    print(lcs_length)
    print(lcs_string)
else:
    print(0)

