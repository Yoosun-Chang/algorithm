#5568
from itertools import permutations

n = int(input())
k = int(input())
numbers = []

for _ in range(n):
    numbers.append(int(input()))

combinations = map(''.join, permutations(map(str, numbers), k))

result = set(combinations)
print(len(result))

