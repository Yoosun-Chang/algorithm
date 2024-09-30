function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        let combined = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        let result = combined.replace(/0/g, ' ').replace(/1/g, '#');
        answer.push(result);
    }
    return answer;
}
