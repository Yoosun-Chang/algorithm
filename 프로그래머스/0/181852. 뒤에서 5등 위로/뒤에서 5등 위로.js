function solution(num_list) {
    num_list.sort((a, b) => a - b); // 숫자 배열을 오름차순으로 정렬
    var answer = [];
    for (let i = 5; i < num_list.length; i++) { // 인덱스 5부터 시작하도록 수정
        answer.push(num_list[i]);
    }
    return answer;
}
