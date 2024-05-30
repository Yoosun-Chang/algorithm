function solution(arr, n) {
    var answer = arr.slice(); // arr의 복사본을 answer에 할당
    if (arr.length % 2 === 0) {
        for (let i = 1; i < arr.length; i += 2) {
            answer[i] += n;
        }
    } else {
        for (let i = 0; i < arr.length; i += 2) {
            answer[i] += n;
        }
    }
    return answer;
}
