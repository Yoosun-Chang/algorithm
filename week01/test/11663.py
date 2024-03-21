# bisect
# import bisect

# N, M = map(int, input().split())
# points = list(map(int, input().split()))
# lines = [list(map(int, input().split())) for _ in range(M)]

# points.sort()

# for line in lines:
#     start, end = line
#     start_index = bisect.bisect_left(points, start)
#     end_index = bisect.bisect_right(points, end)
#     count = end_index - start_index
#     print(count)


def binary_search(array, target):
    # 이분 탐색을 통해 target 이상이 처음으로 나타나는 인덱스를 찾음
    left, right = 0, len(array)
    while left < right:
        mid = (left + right) // 2
        if array[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left

# 입력 받기
N, M = map(int, input().split())
points = list(map(int, input().split()))
lines = [list(map(int, input().split())) for _ in range(M)]

# 점들 정렬
points.sort()

# 각 선분에 대해 이분 탐색을 통해 해당 선분 위에 있는 점의 개수를 구함
for line in lines:
    start, end = line
    start_index = binary_search(points, start)
    end_index = binary_search(points, end + 1)  # end + 1로 설정하여 end가 있는지 확인
    count = end_index - start_index
    print(count)
