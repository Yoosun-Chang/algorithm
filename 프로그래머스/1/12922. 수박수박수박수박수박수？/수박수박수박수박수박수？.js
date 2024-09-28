function solution(n) {
    var answer = '';
    n%2 == 0 ? answer = "수박".repeat(n/2) : answer = "수박".repeat(n/2) + "수";
    return answer;
}