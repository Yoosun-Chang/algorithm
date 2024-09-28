function solution(arr1, arr2) {
    // 결과를 저장할 배열 초기화
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(row);
    }
    
    return answer;
}