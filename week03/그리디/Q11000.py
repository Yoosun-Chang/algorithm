#11000_강의실 배정
import heapq

n = int(input())

lecture_list = [list(map(int, input().split())) for _ in range(n)]

lecture_list.sort()

lecture_queue = []
heapq.heappush(lecture_queue, lecture_list[0][1])

for i in range(1, n):
	# 강의가 겹치는 경우
    if lecture_list[i][0] < lecture_queue[0]:
        heapq.heappush(lecture_queue, lecture_list[i][1])
    else:
    	# heappop은 가장 작은 수 반환, 큐에서 삭제
        heapq.heappop(lecture_queue)
        # heappush는 큐에 삽입 (자동 오름차순 정렬)
        heapq.heappush(lecture_queue, lecture_list[i][1])

print(len(lecture_queue))