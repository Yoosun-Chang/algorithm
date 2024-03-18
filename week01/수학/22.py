#9020
def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def find_goldbach_partition(n):
    # n의 절반까지만 탐색하면 충분함
    for i in range(n // 2, 1, -1):
        # 두 수가 모두 소수이면 골드바흐 파티션
        if is_prime(i) and is_prime(n - i):
            return i, n - i

T = int(input()) 

for _ in range(T):
    n = int(input()) 
    partition = find_goldbach_partition(n)  # 골드바흐 파티션 찾기
    print(partition[0], partition[1])  # 골드바흐 파티션 출력
