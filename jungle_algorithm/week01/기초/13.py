t = int(input())

for _ in range(t):
    scores = list(map(int, input().split()))
    sum_score = 0
    num_people = scores[0]
    for i in range(1, num_people+1):
        sum_score += scores[i]
    avg_score = sum_score / num_people
    
    above_avg = 0
    for i in range(1, num_people+1):
        if scores[i] > avg_score:
            above_avg += 1
    
    print(f"{above_avg/num_people*100:.3f}%")
    


