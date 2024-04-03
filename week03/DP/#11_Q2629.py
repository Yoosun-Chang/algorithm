# 입력을 받기 위해 sys 모듈을 import 합니다.
import sys

# 입력 함수를 sys.stdin.readline() 함수로 변경합니다.
input = sys.stdin.readline
# 추의 개수를 입력받습니다.
n = int(input())

# 각 추의 무게를 리스트로 입력받습니다.
weights = list(map(int, input().split()))

# 확인하고자 하는 구슬의 개수를 입력받습니다.
m = int(input())

# 확인하고자 하는 구슬의 무게를 리스트로 입력받습니다.
want = list(map(int, input().split()))

# 가능한 무게 조합을 저장할 집합을 초기화합니다.
possible = set()

# 각 추의 무게를 순회하며 가능한 무게 조합을 생성합니다.
for cur in weights:
    # 현재까지 생성된 무게 조합을 복사하여 임시 리스트에 저장합니다.
    temp = list(possible)
    # 이전까지 생성된 무게 조합에 현재 추의 무게를 더하거나 뺀 값이 가능한지 확인합니다.
    for p in temp:
        possible.add(p + cur)  # 무게를 더한 값이 가능한 경우 추가합니다.
        possible.add(abs(p - cur))  # 무게를 뺀 값의 절댓값이 가능한 경우 추가합니다.
    possible.add(cur)  # 현재 추의 무게도 가능한 경우 추가합니다.

# 각 구슬의 무게가 가능한지 여부를 확인하여 출력합니다.
for w in want:
    if w in possible:
        print('Y', end=' ')  # 가능한 경우 'Y'를 출력합니다.
    else:
        print('N', end=' ')  # 불가능한 경우 'N'을 출력합니다.
