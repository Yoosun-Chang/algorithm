function solution(arr) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) { // arr.length - 1 대신 arr.length로 수정
        let tmp = parseInt(arr[i]); // praseInt 대신 parseInt로 수정
        for(let j = 0; j < tmp; j++) { // j를 1부터 시작하지 않도록 수정
            answer.push(arr[i]); // arr 대신 tmp를 push
        }
    }
    return answer;
}