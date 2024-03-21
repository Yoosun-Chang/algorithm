n = int(input())
sum = 0
sum1 = 0
sum3 = 0
for i in range(1, n+1):
    sum += i
    sum3 += i**3

sum2 = sum**2


print(sum, sum2, sum3, sep='\n')


# 재귀로 풀기
# def sum(N):
#     if N == 1:
#         return 1
#     return N + sum(N-1)

# def power(N):
#     if N == 1:
#         return 1
#     return N**3+power(N-1)

