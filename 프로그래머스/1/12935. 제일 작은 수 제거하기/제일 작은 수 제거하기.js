function solution(arr) {
    var answer = [];
    if (arr.length == 1) return [-1];
    let min = Math.min(...arr);
    answer = arr.filter(a => a !== min);
    return answer;
}