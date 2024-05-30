from itertools import combinations

nine = [int(x) for _ in range(9) for x in input().split()]

for combination in combinations(nine, 7):
    if sum(combination) == 100:
        combination = sorted(combination)
        for number in combination:
            print(number)
        break