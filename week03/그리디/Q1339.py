#1339_단어 수학
n = int(input())
words = [input()[::-1] for _ in range(n)]
T = [0] * 26
for word in words:
    for i in range(len(word)):
        T[ord(word[i]) - ord('A')] += 10 ** i
T.sort(reverse = True)
S = 0
for i in range(10):
    S += T[i] * (9 - i)
print(S)