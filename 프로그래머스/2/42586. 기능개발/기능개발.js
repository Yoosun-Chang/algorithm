function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let maxDay = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = days[i];
        }
    }
    
    answer.push(count);  // 마지막 그룹 추가
    return answer;
}
