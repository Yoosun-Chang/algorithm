function solution(arr) {
    // 결과를 저장할 배열 초기화
    let answer = [];
    
    // 배열을 순회하면서 연속된 숫자 제거
    for (let i = 0; i < arr.length; i++) {
        // 첫 번째 원소이거나, 이전 원소와 다를 경우
        if (i === 0 || arr[i] !== arr[i - 1]) {
            answer.push(arr[i]); // 결과 배열에 추가
        }
    }
    
    return answer; // 결과 배열 반환
}