function solution(k, score) {
    var answer = [];
    var hall_of_fame = [];
    
    for (let i = 0; i < score.length; i++) {
        hall_of_fame.push(score[i]);
        hall_of_fame.sort((a, b) => b - a);  // 내림차순 정렬
        if (hall_of_fame.length > k) {
            hall_of_fame.pop();  // k개 초과 시 마지막(가장 작은 값) 제거
        }
        answer.push(hall_of_fame[hall_of_fame.length - 1]);  // 최소값 추가
    }
    
    return answer;
}
