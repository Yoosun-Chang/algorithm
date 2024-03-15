n, x = map(int, input().split())
numbers = list(map(int, input().split()))
result = []

for i in range(n):
    if numbers[i] < x:
        result.append(numbers[i])

output = ' '.join(map(str, result))
print(output)
